<template>
	<div class="container">
		<transition
						name="custom-classes-transition"
						enter-active-class="animated bounceInLeft"
		>
			<div class="table-select" v-if="tableSelectView">
				<div class="tab-nav">
					<div v-bind:class="[activeTabindex == 0 ? 'active' : '']" v-on:click="selectNavTab(0,$event)">表名
					</div>
					<div class="middle" v-bind:class="[activeTabindex == 1 ? 'active' : '']" v-on:click="selectNavTab(1,$event)">
						备注名
					</div>
					<div v-bind:class="[activeTabindex == 2 ? 'active' : '']" v-on:click="selectNavTab(2,$event)">点击记录</div>
				</div>
				<div class="tab-content">
					<ul v-bind:class="[activeTabindex == 0 ? 'show' : '']">
						<li class="copy" v-for="(value, key, index) in mysqldata.tables"
						    v-bind:class="[key == currentTableData.tablename ? 'active' : '']"
						    v-on:click="viewTable(key,$event)">
							<p><i>{{ index+1 }}</i>{{ key }}</p>
						</li>
						</li>
					</ul>
					<ul v-bind:class="[activeTabindex == 1 ? 'show' : '']">
						<li v-for="(value, key, index) in mysqldata.tables"
						    v-bind:class="[key == currentTableData.tablename ? 'active' : '']"
						    v-on:click="viewTable(key,$event)">
							<p><i>{{ index+1 }}</i>{{ value.comment | defaultVal(key) }}</p></li>
						</li>
					</ul>
					<ul v-bind:class="[activeTabindex == 2 ? 'show' : '']">
						<li v-for="(value, key, index) in clickHistory"
						    v-bind:class="[key == currentTableData.tablename ? 'active' : '']"
						    v-on:click="viewTable(key,$event)">
							<p><i>{{ index+1 }}</i>{{ key }} ({{ value.pv }})次</p></li>
						</li>
						<li v-show="emptyHistory"><p><i>0</i>暂无记录</p></li>
					</ul>
				</div>
			</div>
		</transition>
		<transition
						name="custom-classes-transition"
						enter-active-class="animated bounceInRight"
						leave-active-class="animated bounceOutLeft"
		>
			<div class="table-list" v-show="tableListView">
				<div class="title">
					<h2>项目数据库字典</h2>
				</div>
				<div class="table-row">
					<div class="table">
						<table>
							<thead>
							<tr>
								<th>编号</th>
								<th width="30%">表名</th>
								<th>表类型</th>
								<th>备注</th>
							</tr>
							</thead>
							<tbody>
							<tr v-for="(value, key, index) in mysqldata.tables">
								<td>{{ index+1 }}</td>
								<td><p  class="copy" v-on:click="CopyThat(key,$event)">{{ key }}</p></td>
								<td>{{ value.engine }}</td>
								<td class="copy" v-on:click="CopyThat(value.comment,$event)">{{ value.comment }}</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</transition>
		<transition
						name="custom-classes-transition"
						enter-active-class="animated bounceInRight"
						leave-active-class="animated bounceOutLeft"
		>
			<div class="table-desc" v-if="tableDescView">
				<div class="title">
					<h2>【{{currentTableData.tablename}}】{{currentTableData.info.comment}}</h2>
				</div>
				<div class="table-row">
					<div class="table">
						<table>
							<tbody>
							<tr>
								<th>字段名</th>
								<th>字段类型</th>
								<th>默认值</th>
								<th>备注</th>
							</tr>
							<tr v-for="item in currentTableData.fields">
								<td class="copy" v-on:click="CopyThat(item.column_name,$event)">{{ item.column_name }}</td>
								<td>{{ item.column_type }}</td>
								<td>{{ item.column_default }}</td>
								<td class="copy"  v-on:click="CopyThat(item.column_comment,$event)">{{ item.column_comment }}</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</transition>
		<div class="tools">
			<div v-on:click="viewTableList">显示首页</div>
			<div v-on:click="makeData">生成数据</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Clipboard from 'clipboard'
//	var Mysql = require('../data/data.js');

	export default {
		name: 'Dictionary',
		data () {
			return {
				tableSelectView: false,
				activeTabindex: 0,
				mysqldata: {},
				currentTableData: {},
				clickHistory: {},
				emptyHistory: true,
				tableListView: false,
				tableDescView: false,
				summary: '',
			}
		},
		methods: {
			selectNavTab: function (i, event) {
				this.activeTabindex = i;
			},
			initCopy: function (target, val) {
				var clipboard = new Clipboard(target, {
					text: function () {
						return val;
					}
				});
				clipboard.on('success', function(e) {
					console.log('success');
					clipboard.destroy();
				});
				clipboard.on('error', function(e) {
					console.log('error');
					clipboard.destroy();
				});

			},
			CopyThat: function (val,event) {
				let app = this;
				app.initCopy(event.target, val);
			},
			viewTable: function (tablename, event) {
				let app = this;
				app.initCopy(event.target, tablename);
				if (app.currentTableData.tablename == tablename) {
					return false;
				}
				app.tableListView = false;
				app.tableDescView = false;
				// 判断是否为空历史
				if (app.emptyHistory) {
					app.emptyHistory = false;
				}
				if (app.clickHistory[tablename]) {
					app.clickHistory[tablename].pv += 1;
				} else {
					app.clickHistory[tablename] = app.mysqldata.tables[tablename];
					app.clickHistory[tablename].pv = 1;
				}
				// 显示该表字段信息
				app.viewTableFields(tablename);

				console.log(this.clickHistory);
			},
			viewTableFields: function (tablename) {
				let app = this;

				app.currentTableData.tablename = tablename;
				app.currentTableData.info = app.mysqldata.tables[tablename];
				app.currentTableData.fields = app.mysqldata.tableFields[tablename];
				setTimeout(()=> {
					app.tableDescView = true;

				}, 20);
//				console.log(app.currentTableData);
			},
			viewTableList: function () {
				let app = this;
				if (app.tableListView) {
					alert('已经是首页了');
					return false;
				}
				app.tableListView = true;
				app.tableDescView = false;
				app.currentTableData = {};
			},
			makeData: function () {
				let app = this;
				app.axios.get('data/initdata.php?t=' + (new Date()).valueOf()).then(function (response) {
					if (response.data instanceof Object == false) {
						alert('生成数据需要把项目部署到PHP环境中,用来读取数据库生成数据字典文件');
					} else {
						alert(response.data.message);
						window.location.reload();
					}
				}).catch(function (error) {
					console.log(error);
				});
			},
			getData: function () {

			}
		},
		filters: {
			defaultVal: function (value, defaultVal) {
				if (!value) return defaultVal;
				return value;
			}
		},
		beforeCreate: function () {
			// 不能调用 methods 内的方法
			let app = this;
			app.axios.get('data/data.json?t=' + (new Date()).valueOf()).then(function (response) {
				app.mysqldata = response.data;
				console.log(app.mysqldata);
			}).catch(function (error) {
				console.log(error);
			});

		},
		computed: {
			getClickHistory: function () {
				return this.clickHistory;
			}
		},
		mounted: function () {
			setTimeout(()=> {
				this.tableSelectView = true;
				this.tableListView = true;

			}, 20);

//			console.log(clipboard)
		}
	}
</script>
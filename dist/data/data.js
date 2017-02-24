var mysqldata={"tables":{"wp_commentmeta":{"engine":"InnoDB","comment":"\u8bc4\u8bba\u76f8\u5173\u4fe1\u606f\u8868"},"wp_comments":{"engine":"InnoDB","comment":"\u8bc4\u8bba\u8868"},"wp_links":{"engine":"InnoDB","comment":"\u8fde\u63a5\u8868"},"wp_options":{"engine":"InnoDB","comment":"\u5168\u5c40\u8bbe\u7f6e\u4fe1\u606f\u8868"},"wp_postmeta":{"engine":"InnoDB","comment":"\u6587\u7ae0\u76f8\u5173\u4fe1\u606f\u8868"},"wp_posts":{"engine":"InnoDB","comment":"\u6587\u7ae0\u8868"},"wp_term_relationships":{"engine":"InnoDB","comment":"\u5206\u7c7b\u5173\u8054\u5173\u7cfb\u4fe1\u606f\u8868"},"wp_term_taxonomy":{"engine":"InnoDB","comment":"\u5206\u7c7b\u7c7b\u578b\u8868"},"wp_termmeta":{"engine":"InnoDB","comment":"\u5206\u7c7b\u76f8\u5173\u4fe1\u606f\u8868"},"wp_terms":{"engine":"InnoDB","comment":"\u5206\u7c7b\u8868\n"},"wp_usermeta":{"engine":"InnoDB","comment":"\u7528\u6237\u76f8\u5173\u4fe1\u606f\u8868"},"wp_users":{"engine":"InnoDB","comment":"\u7528\u6237\u8868"}},"tableFields":{"wp_commentmeta":[{"column_name":"meta_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":null},{"column_name":"comment_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":"0"},{"column_name":"meta_key","column_comment":"","column_type":"varchar(255)","column_default":null},{"column_name":"meta_value","column_comment":"","column_type":"longtext","column_default":null}],"wp_comments":[{"column_name":"comment_ID","column_comment":"","column_type":"bigint(20) unsigned","column_default":null},{"column_name":"comment_post_ID","column_comment":"","column_type":"bigint(20) unsigned","column_default":"0"},{"column_name":"comment_author","column_comment":"","column_type":"tinytext","column_default":null},{"column_name":"comment_author_email","column_comment":"","column_type":"varchar(100)","column_default":""},{"column_name":"comment_author_url","column_comment":"","column_type":"varchar(200)","column_default":""},{"column_name":"comment_author_IP","column_comment":"","column_type":"varchar(100)","column_default":""},{"column_name":"comment_date","column_comment":"","column_type":"datetime","column_default":"0000-00-00 00:00:00"},{"column_name":"comment_date_gmt","column_comment":"","column_type":"datetime","column_default":"0000-00-00 00:00:00"},{"column_name":"comment_content","column_comment":"","column_type":"text","column_default":null},{"column_name":"comment_karma","column_comment":"","column_type":"int(11)","column_default":"0"},{"column_name":"comment_approved","column_comment":"","column_type":"varchar(20)","column_default":"1"},{"column_name":"comment_agent","column_comment":"","column_type":"varchar(255)","column_default":""},{"column_name":"comment_type","column_comment":"","column_type":"varchar(20)","column_default":""},{"column_name":"comment_parent","column_comment":"","column_type":"bigint(20) unsigned","column_default":"0"},{"column_name":"user_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":"0"}],"wp_links":[{"column_name":"link_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":null},{"column_name":"link_url","column_comment":"","column_type":"varchar(255)","column_default":""},{"column_name":"link_name","column_comment":"","column_type":"varchar(255)","column_default":""},{"column_name":"link_image","column_comment":"","column_type":"varchar(255)","column_default":""},{"column_name":"link_target","column_comment":"","column_type":"varchar(25)","column_default":""},{"column_name":"link_description","column_comment":"","column_type":"varchar(255)","column_default":""},{"column_name":"link_visible","column_comment":"","column_type":"varchar(20)","column_default":"Y"},{"column_name":"link_owner","column_comment":"","column_type":"bigint(20) unsigned","column_default":"1"},{"column_name":"link_rating","column_comment":"","column_type":"int(11)","column_default":"0"},{"column_name":"link_updated","column_comment":"","column_type":"datetime","column_default":"0000-00-00 00:00:00"},{"column_name":"link_rel","column_comment":"","column_type":"varchar(255)","column_default":""},{"column_name":"link_notes","column_comment":"","column_type":"mediumtext","column_default":null},{"column_name":"link_rss","column_comment":"","column_type":"varchar(255)","column_default":""}],"wp_options":[{"column_name":"option_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":null},{"column_name":"option_name","column_comment":"","column_type":"varchar(191)","column_default":""},{"column_name":"option_value","column_comment":"","column_type":"longtext","column_default":null},{"column_name":"autoload","column_comment":"","column_type":"varchar(20)","column_default":"yes"}],"wp_postmeta":[{"column_name":"meta_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":null},{"column_name":"post_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":"0"},{"column_name":"meta_key","column_comment":"","column_type":"varchar(255)","column_default":null},{"column_name":"meta_value","column_comment":"","column_type":"longtext","column_default":null}],"wp_posts":[{"column_name":"ID","column_comment":"","column_type":"bigint(20) unsigned","column_default":null},{"column_name":"post_author","column_comment":"","column_type":"bigint(20) unsigned","column_default":"0"},{"column_name":"post_date","column_comment":"","column_type":"datetime","column_default":"0000-00-00 00:00:00"},{"column_name":"post_date_gmt","column_comment":"","column_type":"datetime","column_default":"0000-00-00 00:00:00"},{"column_name":"post_content","column_comment":"","column_type":"longtext","column_default":null},{"column_name":"post_title","column_comment":"","column_type":"text","column_default":null},{"column_name":"post_excerpt","column_comment":"","column_type":"text","column_default":null},{"column_name":"post_status","column_comment":"","column_type":"varchar(20)","column_default":"publish"},{"column_name":"comment_status","column_comment":"","column_type":"varchar(20)","column_default":"open"},{"column_name":"ping_status","column_comment":"","column_type":"varchar(20)","column_default":"open"},{"column_name":"post_password","column_comment":"","column_type":"varchar(255)","column_default":""},{"column_name":"post_name","column_comment":"","column_type":"varchar(200)","column_default":""},{"column_name":"to_ping","column_comment":"","column_type":"text","column_default":null},{"column_name":"pinged","column_comment":"","column_type":"text","column_default":null},{"column_name":"post_modified","column_comment":"","column_type":"datetime","column_default":"0000-00-00 00:00:00"},{"column_name":"post_modified_gmt","column_comment":"","column_type":"datetime","column_default":"0000-00-00 00:00:00"},{"column_name":"post_content_filtered","column_comment":"","column_type":"longtext","column_default":null},{"column_name":"post_parent","column_comment":"","column_type":"bigint(20) unsigned","column_default":"0"},{"column_name":"guid","column_comment":"","column_type":"varchar(255)","column_default":""},{"column_name":"menu_order","column_comment":"","column_type":"int(11)","column_default":"0"},{"column_name":"post_type","column_comment":"","column_type":"varchar(20)","column_default":"post"},{"column_name":"post_mime_type","column_comment":"","column_type":"varchar(100)","column_default":""},{"column_name":"comment_count","column_comment":"","column_type":"bigint(20)","column_default":"0"}],"wp_term_relationships":[{"column_name":"object_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":"0"},{"column_name":"term_taxonomy_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":"0"},{"column_name":"term_order","column_comment":"","column_type":"int(11)","column_default":"0"}],"wp_term_taxonomy":[{"column_name":"term_taxonomy_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":null},{"column_name":"term_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":"0"},{"column_name":"taxonomy","column_comment":"","column_type":"varchar(32)","column_default":""},{"column_name":"description","column_comment":"","column_type":"longtext","column_default":null},{"column_name":"parent","column_comment":"","column_type":"bigint(20) unsigned","column_default":"0"},{"column_name":"count","column_comment":"","column_type":"bigint(20)","column_default":"0"}],"wp_termmeta":[{"column_name":"meta_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":null},{"column_name":"term_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":"0"},{"column_name":"meta_key","column_comment":"","column_type":"varchar(255)","column_default":null},{"column_name":"meta_value","column_comment":"","column_type":"longtext","column_default":null}],"wp_terms":[{"column_name":"term_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":null},{"column_name":"name","column_comment":"","column_type":"varchar(200)","column_default":""},{"column_name":"slug","column_comment":"","column_type":"varchar(200)","column_default":""},{"column_name":"term_group","column_comment":"","column_type":"bigint(10)","column_default":"0"}],"wp_usermeta":[{"column_name":"umeta_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":null},{"column_name":"user_id","column_comment":"","column_type":"bigint(20) unsigned","column_default":"0"},{"column_name":"meta_key","column_comment":"","column_type":"varchar(255)","column_default":null},{"column_name":"meta_value","column_comment":"","column_type":"longtext","column_default":null}],"wp_users":[{"column_name":"ID","column_comment":"","column_type":"bigint(20) unsigned","column_default":null},{"column_name":"user_login","column_comment":"","column_type":"varchar(60)","column_default":""},{"column_name":"user_pass","column_comment":"","column_type":"varchar(255)","column_default":""},{"column_name":"user_nicename","column_comment":"","column_type":"varchar(50)","column_default":""},{"column_name":"user_email","column_comment":"","column_type":"varchar(100)","column_default":""},{"column_name":"user_url","column_comment":"","column_type":"varchar(100)","column_default":""},{"column_name":"user_registered","column_comment":"","column_type":"datetime","column_default":"0000-00-00 00:00:00"},{"column_name":"user_activation_key","column_comment":"","column_type":"varchar(255)","column_default":""},{"column_name":"user_status","column_comment":"","column_type":"int(11)","column_default":"0"},{"column_name":"display_name","column_comment":"","column_type":"varchar(250)","column_default":""}]}}
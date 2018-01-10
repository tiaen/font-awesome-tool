create database test;
create table if not exists `fa_icon`(
        `id` int unsigned auto_increment primary key,
        `name` varchar(128) not null,
        `style` varchar(32) not null,
        `url` varchar(256),
        `update_time` timestamp not null default current_timestamp
    )engine=InnoDB default charset=utf8;

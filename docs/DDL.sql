use db_test;

drop table user;
drop table token;
drop table account;

create table user (
    id bigint not null auto_increment,
    email varchar(128) not null unique,
    nickname varchar(128) not null unique,
    phone varchar(32) null,
    created_at datetime(6),
    created_by varchar(255),
    updated_at datetime(6),
    updated_by varchar(255),
    primary key (id)
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_unicode_ci;

insert into user values
    (2, 'dgdenttt@gmail.com', 'test', '01027149447', now(), 'system', now(), 'system'),
    (3, 'lolol487@naver.com', '온새미로',  '01040696253', now(), 'system', now(), 'system'),
    (4, '8hvdpxr8jy@privaterelay.appleid.com', '8hvdpxr8jy@privaterelay.appleid.com', null, now(), 'system', now(), 'system'),
    (5, 'www-kdi@hanmail.net', 'www-kdi@hanmail.net',  null, now(), 'system', now(), 'system'),
    (6, 'babel3126343@gmail.com', 'babel3126343@gmail.com',  null, now(), 'system', now(), 'system');

create table token (
    id int not null auto_increment,
    symbol varchar(16) not null,
    name varchar(32) not null,
    network varchar(16) not null, -- SPENDING | ON_CHAIN
    address varchar(256),
    type varchar(32), -- spl-token | point-token | nft
    decimals int not null,
    supply bigint not null default 0,
    logo_url varchar(255),
    activated boolean not null default true,
    created_at datetime(6),
    created_by varchar(255),
    updated_at datetime(6),
    updated_by varchar(255),
    primary key (id)
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_unicode_ci;

insert into token values
    (1, 'TIK', 'Taika', 'SENDING', null, null, 0, 0, null, 1, now(), 'system', now(), 'system'),
    (2, 'PTIK', 'Point Taika', 'SENDING', null, null, 0, 0, null, 1, now(), 'system', now(), 'system'),
    (3, 'STIK', 'Staika', 'ON_CHAIN', '7sc5sRrmPC3oz8rq1cJn28GGr2ezqeBLNEjy8LXkHY9U', 'spl-token', 9, 0, 'https://www.arweave.net/XyX7hEz30pb3EZhj48wz7Rw2ruWpzhhVgBZ8l6U3Q_4?ext=png', 1, now(), 'system', now(), 'system'),
    (4, 'SOL', 'Solana', 'ON_CHAIN', 'So11111111111111111111111111111111111111112', 'platform', 9, 0, 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/solana/info/logo.png', 1, now(), 'system', now(), 'system');

create table account (
    id bigint not null auto_increment,
    client_id varchar(20) not null,
    user_id bigint not null,
    token_id int not null,
    balance bigint not null default 0,
    created_at datetime(6),
    created_by varchar(255),
    updated_at datetime(6),
    updated_by varchar(255),
    primary key (id)
) engine=InnoDB AUTO_INCREMENT=1000 default charset=utf8mb4 collate=utf8mb4_unicode_ci;
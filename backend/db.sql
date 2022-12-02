-- Active: 1668781210601@@127.0.0.1@3306@post
drop database if exists post;

create database post;

use post;

create table posts (
	id int(8) primary key auto_increment,
  post_title varchar(255) not null,
  description text not null,
  post_at date not null
);

insert into posts (post_title, description, post_at) values ('Post 1', 'Descripcion post 1', '2000/11/20');
insert into posts (post_title, description, post_at) values ('Post 2', 'Descripcion post 2', '2010/11/24');

select * from posts;
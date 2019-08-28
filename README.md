# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :use

## userテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false|
|name|string||null: false|
|email|string|null: false, unique: false|
|password|string|null: false|

### Association
- has_many :groups through: :groups_users
- has_many :massages

## groupテーブル

|Column|Type|Option|
|------|----|------|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :users , through: :groups_users
- has_many :massages

## massageテーブル

|Column|Type|Option|
|------|----|------|
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
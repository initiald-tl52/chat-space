# README
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|varchar|null: false, foreign_key: true|
|email|varchar|null: false, foreign_key: true|
|password|varchar|null: false, foreign_key: true|

### Association
- has_many :groups, through: :groups_users
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|varchar|null: false, foreign_key: true|

### Association
- has_many :users, through: :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|body|mediumtext|null: false, foreign_key: true|
|image|mediumblob|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users

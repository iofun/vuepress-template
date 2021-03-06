# Git常用命令

> 摘自网上，如有错误，请指出修正


### 常用

git init：初始化本地库

git checkout 分支名 `<path file>`：抽取某个分支上的某个文件夹或文件到本分支（常用）

git status：查看工作区、暂存区的状态

git add `<file name>`：将工作区的“新建/修改”添加到暂存区

git rm `<file name>`：删除指定文件（需要删除暂存区或分支上的文件，同时工作区 `不需要` 这个文件）

git rm --cached `<file name>`：移除暂存区文件，(本地`需要`这个文件，只是`不希望加入版本控制`)

git commit `<file name>`：将暂存区的内容提交到本地库（需要再编辑提交日志，建议采用下面带参数的使用）

git commit -m "提交日志" `<file name>`：文件从暂存区到本地库

 

### 日志

git log：查看历史提交（空格向下翻页，b向上翻页，q退出）

git log --pretty=oneline：以漂亮的一行显示，包含全部哈希索引值

git log --oneline：以简洁的一行显示，包含简洁哈希索引值

git reflog：以简洁的一行显示，包含简洁哈希索引值，同时显示移动到某个历史版本所需的步数

 

### 版本控制

git reset --hard 简洁/完整哈希索引值：回到指定哈希值所对应的版本

git reset --hard HEAD：强制工作区、暂存区、本地库为当前HEAD指针所在的版本

git reset --hard HEAD^：后退一个版本（一个^表示回退一个版本）

git reset --hard HEAD~1：后退一个版本（波浪线~后面的数字表示后退几个版本）
 

### 比较差异

git diff：比较工作区和暂存区的所有文件差异

git diff `<file name>`：比较工作区和暂存区的指定文件的差异

git diff HEAD|HEAD^|HEAD~|哈希索引值 `<file name>`：比较工作区跟本地库的某个版本的指定文件的差异

 

### 分支操作

git branch -v：查看所有分支

git branch -d <分支名>：删除本地分支

git branch <分支名>：新建分支

git checkout <分支名>：切换分支

git merge <被合并分支名>：合并分支

**git merge特殊说明**

- 如 master 分支合并 test 分支，那么当前必须处于 master 分支上，然后执行 git merge test 命令

- 合并出现冲突

  ①删除git自动标记符号，如<<<<<<< HEAD、>>>>>>>等   
  ②修改到满意后，保存退出  
  ③git add `<file name>`  
  ④git commit -m "日志信息"，此时后面不要带文件名 

 

 

### 本地库跟远程库交互：

git clone <远程库地址>：克隆远程库

git remote -v：查看远程库地址别名

git remote add <别名> <远程库地址>：新建远程库地址别名

git remote rm <别名>：删除本地中远程库别名

git push <别名> <分支名>：本地库某个分支推送到远程库，分支必须指定

git pull <别名> <分支名>：把远程库的修改拉取到本地（该命令包括git fetch，git merge）

git fetch <远程库别名> <远程库分支名>：抓取远程库的指定分支到本地，但没有合并

git merge <远程库别名/远程库分支名>：将抓取下来的远程的分支，跟当前所在分支进行合并

git fork：复制远程库



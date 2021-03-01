# git使用注意事项

#### 目录权限处理
创建.ssh目录
```
mkdir ~/.ssh
```

给过来sshkey的需要添加文件权限处理
```
sudo chmod 764 ~/.ssh/id_rsa.pub
```


#### 拉取免密
对于每次拉取或提交提示`Enter passphrase for key '/Users/wecut/.ssh/id_rsa'`处理
```
ssh-add -K ~/.ssh/id_rsa
```
输入密码回车即可

# student-infomation-nodejs
1. Create Project Folder
mkdir student-app
cd student-app
2. Initialize Node.js Project
npm init -y
3. Install Required Packages
npm install express ejs body-parser



1. Install PM2
sudo npm install -g pm2

Verify:

pm2 -v
2. Start Node.js App in Detached Mode

Inside your project folder:

pm2 start app.js --name student-app

OR if your main file is server.js:

pm2 start server.js --name student-app
3. Check Running Services
pm2 status

You will see:

┌────┬──────────────┬─────────┬──────┐
│ id │ name         │ status  │ cpu  │
├────┼──────────────┼─────────┼──────┤
│ 0  │ student-app  │ online  │ 0%   │
└────┴──────────────┴─────────┴──────┘
4. View Logs
pm2 logs student-app
5. Restart Service
pm2 restart student-app
6. Stop Service
pm2 stop student-app
7. Delete Service
pm2 delete student-app
8. Auto Start After Server Reboot

Run:

pm2 startup

It will generate a command like:

sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ec2-user --hp /home/ec2-user

Run that generated command.

Then save processes:

pm2 save
9. Access Application
http://YOUR_SERVER_IP:3000

USE samepage_db;
INSERT INTO UserInfo(name, user_name, email, password) 
VALUES ("Bill Gates", "microsoftOG", "billgates@microsoft.com", "lovepcs")
INSERT INTO UserInfo(name, user_name, email, password) 
VALUES ("Melinda Gates", "queenmicrosoft", "melindagates@microsoft.com", "makemoney");
INSERT INTO UserInfo(name, user_name, email, password) 
VALUES ("Rory Gates", "microsoftjr", "rorygates@microsoft.com", "takemoney");
INSERT INTO UserInfo(name, user_name, email, password) 
VALUES ("Jennifer Gates", "lilmicrosoft", "jennifergates@microsoft.com", "usemoney");
INSERT INTO UserInfo(name, user_name, email, password) 
VALUES ("Steve Jobs", "stepdadsteve", "stevejobs@mac.com", "macOG");
INSERT INTO UserInfo(name, user_name, email, password) 
VALUES ("Sally Jobs", "mamamac", "sallyjobs@mac.com", "keepmakingmoney");

INSERT INTO tobringlistitem (name) VALUES ('A pillow');
INSERT INTO tobringlistitem (name) VALUES ('A sleeping bag');
INSERT INTO tobringlistitem (name, brought) VALUES ('A box of medicine', true);
INSERT INTO tobringlistitem (name, brought) VALUES ('Lots of snacks', true);
INSERT INTO tobringlistitem (name, brought) VALUES ('The Inhaler', true);
INSERT INTO tobringlistitem (name) VALUES ('The kitchen sink');

INSERT INTO calendar(event, date, time)
VALUES ("Rort Baseball Tournament", "2018-06-15", "10:00:00");
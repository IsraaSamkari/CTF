BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "users" (
	"username"	TEXT,
	"password"	TEXT NOT NULL,
	PRIMARY KEY("username")
);
INSERT INTO "users" VALUES ('john_doe','securepass123');
INSERT INTO "users" VALUES ('jane_smith','p@ssw0rd!');
INSERT INTO "users" VALUES ('mike_jones','mikepass789');
INSERT INTO "users" VALUES ('sarah_connor','terminator2');
INSERT INTO "users" VALUES ('admin_user','Adm1nP@ss');
INSERT INTO "users" VALUES ('test_account','test1234');
INSERT INTO "users" VALUES ('demo_user','demoPass!');
INSERT INTO "users" VALUES ('alice_wonder','rabbitHole');
INSERT INTO "users" VALUES ('bob_builder','canWeFixIt');
INSERT INTO "users" VALUES ('guest_user','guestAccess');
COMMIT;

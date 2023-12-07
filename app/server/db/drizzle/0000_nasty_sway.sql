CREATE TABLE `bitcoins` (
	`id` integer PRIMARY KEY NOT NULL,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP,
	`gbr` integer,
	`eur` integer,
	`usd` integer
);

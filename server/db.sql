
CREATE TABLE Users (
    user_id VARCHAR(100) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    social_signin BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Trades (
    trade_id VARCHAR(100) NOT NULL PRIMARY KEY,
    script VARCHAR(100) NOT NULL,
    trade_type VARCHAR(20) NOT NULL,
    entry_price DECIMAL(10, 2) NOT NULL, 
    exit_price DECIMAL(10, 2) NOT NULL, 
    quantity INT NOT NULL, 
    pnl DECIMAL(10, 2) NOT NULL,
    trading_session VARCHAR(20) NOT NULL,
    strategy VARCHAR(100) NOT NULL,
    user_id VARCHAR(100) NOT NULL,
   	traded_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);


CREATE TABLE Journals (
    journal_id VARCHAR(100) NOT NULL PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL,
    trade_id VARCHAR(100) NOT NULL,
    title VARCHAR(500) NOT NULL,
    content VARCHAR(6000) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (trade_id) REFERENCES Trades(trade_id)
);



-- SIGNUP and LOGIN
select user_id from users where email='sachin@gmail.com' ;

INSERT INTO Users (user_id, name, email, password)
VALUES ('001', 'Sachin', 'sachin@gmail.com', '123');


-- LOG/LIST TRADE, 

-- list all trades for particaular user
select * from trades where user_id = '001';

-- log a trade
insert into trades (trade_id, script, trade_type, entry_price, exit_price, quantity, pnl, trading_session, strategy, user_id, traded_on)
values('001', 'NIFTY50 24200 CE', 'Long', 186.8, 228.05, 50, 2062.5, 'Forenoon', '9/15 EMA and Support/Resistance', '001', '2024-11-08');

insert into trades (trade_id, script, trade_type, entry_price, exit_price, quantity, pnl, trading_session, strategy, user_id, traded_on)
values('002', 'NIFTY50 24000 PE', 'Long', 201.3, 226.1, 25, 620, 'Forenoon', '9/15 EMA and Support/Resistance', '001', '2024-11-04');

insert into trades (trade_id, script, trade_type, entry_price, exit_price, quantity, pnl, trading_session, strategy, user_id, traded_on)
values('003', 'NIFTY50 24000 PE', 'Long', 205.25, 203.94, 100, -131, 'Forenoon', '9/15 EMA and Support/Resistance', '001', '2024-11-08');


-- filter trades by date
SELECT * FROM trades WHERE user_id = '001' AND traded_on::DATE = '2024-11-08';

-- get overall pnl
select sum(pnl) as net_pnl from trades where user_id = '001';

-- get pnl for particuular day
SELECT sum(pnl) as net_pnl FROM trades WHERE user_id = '001' AND traded_on::DATE = '2024-11-08';

-- get last 7/30 days pnl
SELECT sum(pnl) as net_pnl 
FROM trades 
WHERE user_id = '001' 
AND traded_on >= CURRENT_TIMESTAMP - INTERVAL '30 days';



-- LOG JOURNAL 
select * from journals where user_id = '001';

INSERT INTO Journals (journal_id, user_id, title, content, trade_id)
VALUES ('001', '001', 'Nifty Option Buying', 'This was a beutiful trade, I holded this trade for 1:13 RR. I can say i got lucky because right after I exited the trade the price went down.', '001');



    CREATE TABLE IF NOT EXISTS pomiar (
        id INTEGER PRIMARY KEY ASC,
        date varchar(250) NOT NULL,
        time varchar(250) NOT NULL,
        time_zone varchar(250) NOT NULL,
        empty1 varchar(250) NOT NULL,
        empty2 varchar(250) NOT NULL,
        empty3 varchar(250) NOT NULL,
        press_keller varchar(250) NOT NULL,
        temp_keller varchar(250) NOT NULL,
        volt varchar(250) NOT NULL,
        batt varchar(250) NOT NULL,
        solar varchar(250) NOT NULL,
        empty9 varchar(250) NOT NULL,
        empty10 varchar(250) NOT NULL,
        empty11 varchar(250) NOT NULL,
        empty12 varchar(250) NOT NULL,
        empty13 varchar(250) NOT NULL,
        rssi varchar(250) NOT NULL
    )
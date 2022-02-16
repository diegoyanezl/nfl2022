const csv = '25,21,14,17,30,15,25,27,28,10,21,25,27,15,25,10,27,18,21,25,32,15,21,22,27,26,26,37,27,36,40,30,35,26,38,17,29,35,27,30,20,29,35,20,40,20,47,25,25,38,27,20,27,20,34,20,20,23,34,27,38,20,24,20,30,27,34,27,24,27,34,37,31,28,23,17,30,27,28,20,16,9,20,16,31,27,38,17,20,29,20,28,30,24,13,17,21,31,24,20,28,25,23,27,19,38,19,21,26,35,25,22,42,15,18,9,9,25,17,29,32,40,42,29,3,0,0,0,28,24,24,31,20,17,34,17,29,24,42,24,30,27,17,31,38,23,29,35,31,34,33,27,37,27,30,35,???,Burrow,Burrow,Stafford ,Burrow,Beckham Jr.';

var superBowlDone = true;
var rounds_so_far = 4; // def=1,after wc-2, after div-3, after conf-4, after sb-5, FOR POINT KEEPING
var ALIVEtms = [ 'LAR'];
var REAL = [
	[ // DIVISIONAL TEAMS
		'TB',
		'SF',
		'LAR',
		'KC',
		'BUF',
		'CIN'
	],
	[ // CONFERENCE TEAMS
		'SF',
		'LAR',
		'CIN',
		'KC'
	], 
	['CIN', 'LAR'],
	['LAR/CIN'] 
];
var REALscores = [
	[['CIN','LV'], 26, 19],
	[['BUF','NE'], 47, 17],
	[['TB','PHI'], 31, 15],
	[['DAL','SF'], 17, 23],
	[['KC','PIT'], 42, 21],
	[['LAR','ARZ'], 34, 11],

	[['TEN','CIN'], 16, 19],
	[['GB','SF'], 10, 13],
	[['TB','LAR'], 27, 30],
	[['KC','BUF'], 42, 36],

	[['KC','CIN'], 24, 27],
	[['LAR','SF'], 20, 17],

	[['CIN','LAR'], 20, 23, "Kupp"]
];
///////////////////////////////////////////

var split = csv.split(',');
var andresCSV = split.slice(0,26);
var apCSV = split.slice(26,52);
var fabianCSV = split.slice(52,78);
var diegoCSV = split.slice(78,104);
var mamiCSV = split.slice(104,130);
var papiCSV = split.slice(130,156);
var mvpCSV = split.slice(156,162);

var CSVs = [andresCSV, apCSV,fabianCSV,diegoCSV,mamiCSV,papiCSV,mvpCSV];

// [ game(for easier inputing), score dif(+Home win, -Away win), total pts(tiebreaker) ]
var scores_andres = [['CIN/LV', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_ap = [['CIN/LV', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_fabian = [['CIN/LV', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_diego = [['CIN/LV', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_mami = [['CIN/LV', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_papi = [['CIN/LV', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];

var scores_arr = [scores_andres,scores_ap,scores_fabian,scores_diego,scores_mami,scores_papi];
for (i=0; i < 6; i++) {
    let CSV_data = CSVs[i];
    for (j=0; j < 26; j+=2) {
        let home = parseInt(CSV_data[j]);
        let away = parseInt(CSV_data[j+1]);
        let winner = home - away;
        let summ = home + away;
        if (winner != 0) {
            scores_arr[i][j/2][1] = winner; 
            scores_arr[i][j/2][2] = summ; 
            if (j == 24) {
                scores_arr[i][j/2][3] = mvpCSV[i]; 
            }
        }
    }
}

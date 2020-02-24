var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":627,"id":23382,"methods":[{"el":96,"sc":5,"sl":89},{"el":105,"sc":5,"sl":102},{"el":130,"sc":5,"sl":115},{"el":142,"sc":5,"sl":140},{"el":164,"sc":13,"sl":157},{"el":169,"sc":13,"sl":166},{"el":172,"sc":5,"sl":152},{"el":184,"sc":5,"sl":174},{"el":194,"sc":5,"sl":192},{"el":229,"sc":5,"sl":208},{"el":242,"sc":5,"sl":240},{"el":265,"sc":5,"sl":253},{"el":282,"sc":5,"sl":267},{"el":299,"sc":5,"sl":291},{"el":308,"sc":5,"sl":305},{"el":330,"sc":17,"sl":324},{"el":335,"sc":17,"sl":332},{"el":339,"sc":5,"sl":316},{"el":344,"sc":5,"sl":341},{"el":351,"sc":5,"sl":346},{"el":384,"sc":5,"sl":363},{"el":397,"sc":5,"sl":395},{"el":408,"sc":5,"sl":406},{"el":427,"sc":5,"sl":415},{"el":447,"sc":5,"sl":433},{"el":456,"sc":5,"sl":454},{"el":470,"sc":5,"sl":464},{"el":488,"sc":5,"sl":477},{"el":496,"sc":5,"sl":494},{"el":503,"sc":5,"sl":501},{"el":511,"sc":5,"sl":509},{"el":518,"sc":5,"sl":516},{"el":529,"sc":5,"sl":524},{"el":536,"sc":5,"sl":534},{"el":540,"sc":5,"sl":538},{"el":549,"sc":5,"sl":545},{"el":558,"sc":5,"sl":554},{"el":565,"sc":5,"sl":563},{"el":626,"sc":5,"sl":623}],"name":"SourceRoot","sl":64},{"el":77,"id":23382,"methods":[],"name":"SourceRoot.Callback","sl":66},{"el":69,"id":23382,"methods":[],"name":"SourceRoot.Callback.Result","sl":67},{"el":621,"id":23608,"methods":[{"el":582,"sc":9,"sl":579},{"el":602,"sc":21,"sl":589},{"el":607,"sc":21,"sl":604},{"el":616,"sc":9,"sl":584}],"name":"SourceRoot.ParallelParse","sl":573},{"el":620,"id":23633,"methods":[],"name":"SourceRoot.ParallelParse.VisitFileCallback","sl":618}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1106":{"methods":[{"sl":89}],"name":"fileAsRootIsNotAllowed","pass":true,"statements":[{"sl":90},{"sl":91},{"sl":92}]},"test_1320":{"methods":[{"sl":174},{"sl":267},{"sl":316},{"sl":324},{"sl":332},{"sl":346},{"sl":454},{"sl":464},{"sl":538}],"name":"saveInCallback","pass":true,"statements":[{"sl":175},{"sl":177},{"sl":179},{"sl":180},{"sl":181},{"sl":183},{"sl":268},{"sl":269},{"sl":270},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":276},{"sl":317},{"sl":318},{"sl":319},{"sl":320},{"sl":321},{"sl":322},{"sl":323},{"sl":326},{"sl":327},{"sl":334},{"sl":338},{"sl":347},{"sl":348},{"sl":455},{"sl":465},{"sl":466},{"sl":467},{"sl":468},{"sl":469},{"sl":539}]},"test_1327":{"methods":[{"sl":89},{"sl":115},{"sl":140},{"sl":253}],"name":"dotsInPackageAreNotAllowed","pass":true,"statements":[{"sl":90},{"sl":91},{"sl":94},{"sl":95},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":123},{"sl":124},{"sl":125},{"sl":141},{"sl":254},{"sl":255},{"sl":256},{"sl":257},{"sl":263}]},"test_1464":{"methods":[{"sl":89},{"sl":174},{"sl":267},{"sl":346},{"sl":363},{"sl":406},{"sl":545},{"sl":579},{"sl":584},{"sl":589},{"sl":604}],"name":"parseOwnSourceCode","pass":true,"statements":[{"sl":90},{"sl":91},{"sl":94},{"sl":95},{"sl":175},{"sl":177},{"sl":179},{"sl":183},{"sl":268},{"sl":269},{"sl":270},{"sl":271},{"sl":272},{"sl":275},{"sl":276},{"sl":347},{"sl":348},{"sl":364},{"sl":365},{"sl":366},{"sl":367},{"sl":368},{"sl":369},{"sl":370},{"sl":371},{"sl":372},{"sl":373},{"sl":380},{"sl":381},{"sl":383},{"sl":407},{"sl":546},{"sl":547},{"sl":548},{"sl":580},{"sl":581},{"sl":586},{"sl":587},{"sl":588},{"sl":591},{"sl":594},{"sl":595},{"sl":596},{"sl":597},{"sl":598},{"sl":600},{"sl":606},{"sl":613},{"sl":614}]},"test_1742":{"methods":[{"sl":89},{"sl":152},{"sl":166},{"sl":174},{"sl":192},{"sl":346},{"sl":516}],"name":"dotsInRootDirectoryAreAllowed","pass":true,"statements":[{"sl":90},{"sl":91},{"sl":94},{"sl":95},{"sl":153},{"sl":154},{"sl":155},{"sl":156},{"sl":168},{"sl":171},{"sl":175},{"sl":177},{"sl":179},{"sl":180},{"sl":181},{"sl":193},{"sl":347},{"sl":348},{"sl":517}]},"test_1905":{"methods":[{"sl":174},{"sl":267},{"sl":346},{"sl":363},{"sl":454},{"sl":464},{"sl":538},{"sl":579},{"sl":584},{"sl":589},{"sl":604}],"name":"saveInCallbackParallelized","pass":true,"statements":[{"sl":175},{"sl":177},{"sl":179},{"sl":180},{"sl":181},{"sl":183},{"sl":268},{"sl":269},{"sl":270},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":276},{"sl":347},{"sl":348},{"sl":364},{"sl":365},{"sl":366},{"sl":367},{"sl":368},{"sl":369},{"sl":370},{"sl":371},{"sl":372},{"sl":373},{"sl":380},{"sl":381},{"sl":383},{"sl":455},{"sl":465},{"sl":466},{"sl":467},{"sl":468},{"sl":469},{"sl":539},{"sl":580},{"sl":581},{"sl":586},{"sl":587},{"sl":588},{"sl":591},{"sl":592},{"sl":594},{"sl":600},{"sl":606},{"sl":613}]},"test_788":{"methods":[{"sl":115},{"sl":140},{"sl":152},{"sl":157},{"sl":166},{"sl":174},{"sl":192},{"sl":346},{"sl":516}],"name":"resolveExpressions","pass":true,"statements":[{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":141},{"sl":153},{"sl":154},{"sl":155},{"sl":156},{"sl":159},{"sl":160},{"sl":161},{"sl":163},{"sl":168},{"sl":171},{"sl":175},{"sl":177},{"sl":179},{"sl":183},{"sl":193},{"sl":347},{"sl":348},{"sl":517}]},"test_981":{"methods":[{"sl":115},{"sl":140},{"sl":152},{"sl":157},{"sl":166},{"sl":174},{"sl":192},{"sl":346},{"sl":516},{"sl":524}],"name":"parseTestDirectory","pass":true,"statements":[{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":141},{"sl":153},{"sl":154},{"sl":155},{"sl":156},{"sl":159},{"sl":160},{"sl":161},{"sl":163},{"sl":168},{"sl":171},{"sl":175},{"sl":177},{"sl":179},{"sl":180},{"sl":181},{"sl":183},{"sl":193},{"sl":347},{"sl":348},{"sl":517},{"sl":525}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1327, 1464, 1742, 1106], [1327, 1464, 1742, 1106], [1327, 1464, 1742, 1106], [1106], [], [1327, 1464, 1742], [1327, 1464, 1742], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1327, 981, 788], [1327, 981, 788], [1327, 981, 788], [1327, 981, 788], [1327, 981, 788], [], [], [], [1327, 981, 788], [1327, 981, 788], [1327, 981, 788], [], [981, 788], [981, 788], [981, 788], [], [], [], [], [], [], [], [], [], [], [1327, 981, 788], [1327, 981, 788], [], [], [], [], [], [], [], [], [], [], [981, 1742, 788], [981, 1742, 788], [981, 1742, 788], [981, 1742, 788], [981, 1742, 788], [981, 788], [], [981, 788], [981, 788], [981, 788], [], [981, 788], [], [], [981, 1742, 788], [], [981, 1742, 788], [], [], [981, 1742, 788], [], [], [1320, 981, 1464, 1742, 788, 1905], [1320, 981, 1464, 1742, 788, 1905], [], [1320, 981, 1464, 1742, 788, 1905], [], [1320, 981, 1464, 1742, 788, 1905], [1320, 981, 1742, 1905], [1320, 981, 1742, 1905], [], [1320, 981, 1464, 788, 1905], [], [], [], [], [], [], [], [], [981, 1742, 788], [981, 1742, 788], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1327], [1327], [1327], [1327], [1327], [], [], [], [], [], [1327], [], [], [], [1320, 1464, 1905], [1320, 1464, 1905], [1320, 1464, 1905], [1320, 1464, 1905], [1320, 1464, 1905], [1320, 1464, 1905], [1320, 1905], [1320, 1905], [1464], [1320, 1464, 1905], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1320], [1320], [1320], [1320], [1320], [1320], [1320], [1320], [1320], [], [1320], [1320], [], [], [], [], [1320], [], [1320], [], [], [], [1320], [], [], [], [], [], [], [], [1320, 981, 1464, 1742, 788, 1905], [1320, 981, 1464, 1742, 788, 1905], [1320, 981, 1464, 1742, 788, 1905], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1464, 1905], [1464, 1905], [1464, 1905], [1464, 1905], [1464, 1905], [1464, 1905], [1464, 1905], [1464, 1905], [1464, 1905], [1464, 1905], [1464, 1905], [], [], [], [], [], [], [1464, 1905], [1464, 1905], [], [1464, 1905], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1464], [1464], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1320, 1905], [1320, 1905], [], [], [], [], [], [], [], [], [1320, 1905], [1320, 1905], [1320, 1905], [1320, 1905], [1320, 1905], [1320, 1905], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [981, 1742, 788], [981, 1742, 788], [], [], [], [], [], [], [981], [981], [], [], [], [], [], [], [], [], [], [], [], [], [1320, 1905], [1320, 1905], [], [], [], [], [], [1464], [1464], [1464], [1464], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1464, 1905], [1464, 1905], [1464, 1905], [], [], [1464, 1905], [], [1464, 1905], [1464, 1905], [1464, 1905], [1464, 1905], [], [1464, 1905], [1905], [], [1464, 1905], [1464], [1464], [1464], [1464], [], [1464, 1905], [], [], [], [1464, 1905], [], [1464, 1905], [], [], [], [], [], [], [1464, 1905], [1464], [], [], [], [], [], [], [], [], [], [], [], [], []]

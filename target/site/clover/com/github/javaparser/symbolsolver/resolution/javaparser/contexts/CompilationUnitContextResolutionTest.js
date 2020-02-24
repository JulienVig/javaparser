var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":247,"id":20225,"methods":[{"el":65,"sc":5,"sl":62},{"el":73,"sc":5,"sl":67},{"el":87,"sc":5,"sl":75},{"el":97,"sc":5,"sl":89},{"el":112,"sc":5,"sl":99},{"el":126,"sc":5,"sl":114},{"el":136,"sc":5,"sl":128},{"el":149,"sc":5,"sl":138},{"el":162,"sc":5,"sl":151},{"el":172,"sc":5,"sl":164},{"el":188,"sc":5,"sl":174},{"el":198,"sc":5,"sl":190},{"el":208,"sc":5,"sl":200},{"el":226,"sc":5,"sl":210},{"el":245,"sc":5,"sl":228}],"name":"CompilationUnitContextResolutionTest","sl":58}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_103":{"methods":[{"sl":164}],"name":"solveSymbolAsValueReferringToStaticField","pass":true,"statements":[{"sl":166},{"sl":167},{"sl":169},{"sl":170},{"sl":171}]},"test_104":{"methods":[{"sl":200}],"name":"solveTypeNotImported","pass":true,"statements":[{"sl":202},{"sl":203},{"sl":205},{"sl":206},{"sl":207}]},"test_189":{"methods":[{"sl":174}],"name":"solveTypeInSamePackage","pass":true,"statements":[{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":183},{"sl":184},{"sl":186},{"sl":187}]},"test_22":{"methods":[{"sl":114}],"name":"solveSymbolReferringToStaticallyImportedUsingAsteriskValue","pass":true,"statements":[{"sl":116},{"sl":118},{"sl":119},{"sl":120},{"sl":122},{"sl":123},{"sl":124},{"sl":125}]},"test_271":{"methods":[{"sl":89}],"name":"solveUnexistingGenericType","pass":true,"statements":[{"sl":91},{"sl":92},{"sl":94},{"sl":96}]},"test_281":{"methods":[{"sl":210}],"name":"solveMethodStaticallyImportedWithAsterisk","pass":true,"statements":[{"sl":212},{"sl":214},{"sl":215},{"sl":216},{"sl":218},{"sl":220},{"sl":221},{"sl":222},{"sl":223},{"sl":224},{"sl":225}]},"test_337":{"methods":[{"sl":228}],"name":"solveMethodStaticallyImportedWithoutAsterisk","pass":true,"statements":[{"sl":230},{"sl":232},{"sl":233},{"sl":234},{"sl":236},{"sl":238},{"sl":239},{"sl":240},{"sl":241},{"sl":242},{"sl":243}]},"test_371":{"methods":[{"sl":190}],"name":"solveTypeImported","pass":true,"statements":[{"sl":192},{"sl":193},{"sl":195},{"sl":196},{"sl":197}]},"test_556":{"methods":[{"sl":138}],"name":"solveSymbolAsValueReferringToStaticallyImportedValue","pass":true,"statements":[{"sl":140},{"sl":141},{"sl":143},{"sl":144},{"sl":145},{"sl":146},{"sl":147},{"sl":148}]},"test_631":{"methods":[{"sl":67}],"name":"getParent","pass":true,"statements":[{"sl":69},{"sl":70},{"sl":72}]},"test_64":{"methods":[{"sl":128}],"name":"solveSymbolReferringToStaticField","pass":true,"statements":[{"sl":130},{"sl":131},{"sl":133},{"sl":134},{"sl":135}]},"test_759":{"methods":[{"sl":151}],"name":"solveSymbolAsValueReferringToStaticallyImportedUsingAsteriskValue","pass":true,"statements":[{"sl":153},{"sl":154},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161}]},"test_812":{"methods":[{"sl":75}],"name":"solveExistingGenericType","pass":true,"statements":[{"sl":77},{"sl":78},{"sl":80},{"sl":81},{"sl":82},{"sl":84},{"sl":85},{"sl":86}]},"test_851":{"methods":[{"sl":99}],"name":"solveSymbolReferringToStaticallyImportedValue","pass":true,"statements":[{"sl":101},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":110},{"sl":111}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [631], [], [631], [631], [], [631], [], [], [812], [], [812], [812], [], [812], [812], [812], [], [812], [812], [812], [], [], [271], [], [271], [271], [], [271], [], [271], [], [], [851], [], [851], [], [851], [851], [851], [], [851], [851], [], [851], [851], [], [], [22], [], [22], [], [22], [22], [22], [], [22], [22], [22], [22], [], [], [64], [], [64], [64], [], [64], [64], [64], [], [], [556], [], [556], [556], [], [556], [556], [556], [556], [556], [556], [], [], [759], [], [759], [759], [], [759], [759], [759], [759], [759], [759], [], [], [103], [], [103], [103], [], [103], [103], [103], [], [], [189], [], [189], [], [189], [189], [189], [189], [], [189], [189], [], [189], [189], [], [], [371], [], [371], [371], [], [371], [371], [371], [], [], [104], [], [104], [104], [], [104], [104], [104], [], [], [281], [], [281], [], [281], [281], [281], [], [281], [], [281], [281], [281], [281], [281], [281], [], [], [337], [], [337], [], [337], [337], [337], [], [337], [], [337], [337], [337], [337], [337], [337], [], [], [], []]

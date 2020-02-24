var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":102,"id":15246,"methods":[{"el":46,"sc":5,"sl":42},{"el":52,"sc":5,"sl":48},{"el":57,"sc":5,"sl":54},{"el":62,"sc":5,"sl":59},{"el":67,"sc":5,"sl":64},{"el":72,"sc":5,"sl":69},{"el":77,"sc":5,"sl":74},{"el":82,"sc":5,"sl":79},{"el":86,"sc":5,"sl":84},{"el":91,"sc":5,"sl":88},{"el":96,"sc":5,"sl":93},{"el":101,"sc":5,"sl":98}],"name":"ReflectionFieldDeclaration","sl":36}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_103":{"methods":[{"sl":42},{"sl":54},{"sl":59},{"sl":64}],"name":"solveSymbolAsValueReferringToStaticField","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":56},{"sl":61},{"sl":66}]},"test_19":{"methods":[{"sl":42},{"sl":59},{"sl":79},{"sl":98}],"name":"solveSymbolAsValueReferringToDeclaredStaticField","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":61},{"sl":81},{"sl":100}]},"test_22":{"methods":[{"sl":42},{"sl":54},{"sl":59}],"name":"solveSymbolReferringToStaticallyImportedUsingAsteriskValue","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":56},{"sl":61}]},"test_222":{"methods":[{"sl":42},{"sl":54},{"sl":59}],"name":"getTypeOfFieldAccess","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":56},{"sl":61}]},"test_411":{"methods":[{"sl":42},{"sl":54},{"sl":59}],"name":"lambdaPrint","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":56},{"sl":61}]},"test_461":{"methods":[{"sl":42},{"sl":48},{"sl":54},{"sl":59},{"sl":84}],"name":"resolveInheritedFieldFromInterface","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":49},{"sl":50},{"sl":51},{"sl":56},{"sl":61},{"sl":85}]},"test_488":{"methods":[{"sl":42},{"sl":54},{"sl":59}],"name":"issue1485withoutSpecifyingJARs","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":56},{"sl":61}]},"test_490":{"methods":[{"sl":42},{"sl":54},{"sl":59}],"name":"test","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":56},{"sl":61}]},"test_492":{"methods":[{"sl":42},{"sl":59},{"sl":64}],"name":"testGetAllFields","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":61},{"sl":66}]},"test_534":{"methods":[{"sl":42},{"sl":59},{"sl":79},{"sl":98}],"name":"enumAndStaticInitializer","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":61},{"sl":81},{"sl":100}]},"test_545":{"methods":[{"sl":42},{"sl":48},{"sl":54},{"sl":59},{"sl":84}],"name":"testGetFieldDeclarationTypeVariableInheritance","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":49},{"sl":50},{"sl":51},{"sl":56},{"sl":61},{"sl":85}]},"test_556":{"methods":[{"sl":42},{"sl":54},{"sl":59},{"sl":64}],"name":"solveSymbolAsValueReferringToStaticallyImportedValue","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":56},{"sl":61},{"sl":66}]},"test_613":{"methods":[{"sl":42},{"sl":59},{"sl":79},{"sl":98}],"name":"accessEnumFieldThroughThis","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":61},{"sl":81},{"sl":100}]},"test_622":{"methods":[{"sl":42},{"sl":59},{"sl":79},{"sl":98}],"name":"solveSymbolReferringToDeclaredInstanceField","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":61},{"sl":81},{"sl":100}]},"test_64":{"methods":[{"sl":42},{"sl":54},{"sl":59}],"name":"solveSymbolReferringToStaticField","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":56},{"sl":61}]},"test_711":{"methods":[{"sl":42},{"sl":59},{"sl":79},{"sl":98}],"name":"solveSymbolReferringToDeclaredStaticField","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":61},{"sl":81},{"sl":100}]},"test_724":{"methods":[{"sl":42},{"sl":59},{"sl":79},{"sl":98}],"name":"solveSymbolAsValueReferringToDeclaredInstanceField","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":61},{"sl":81},{"sl":100}]},"test_759":{"methods":[{"sl":42},{"sl":54},{"sl":59},{"sl":64}],"name":"solveSymbolAsValueReferringToStaticallyImportedUsingAsteriskValue","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":56},{"sl":61},{"sl":66}]},"test_79":{"methods":[{"sl":42},{"sl":54},{"sl":59}],"name":"testGetFieldTypeExisting","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":56},{"sl":61}]},"test_851":{"methods":[{"sl":42},{"sl":54},{"sl":59}],"name":"solveSymbolReferringToStaticallyImportedValue","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":56},{"sl":61}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [851, 724, 64, 222, 461, 19, 79, 534, 492, 22, 613, 490, 103, 488, 711, 411, 556, 759, 545, 622], [851, 724, 64, 222, 461, 19, 79, 534, 492, 22, 613, 490, 103, 488, 711, 411, 556, 759, 545, 622], [851, 724, 64, 222, 461, 19, 79, 534, 492, 22, 613, 490, 103, 488, 711, 411, 556, 759, 545, 622], [851, 724, 64, 222, 461, 19, 79, 534, 492, 22, 613, 490, 103, 488, 711, 411, 556, 759, 545, 622], [], [], [461, 545], [461, 545], [461, 545], [461, 545], [], [], [851, 64, 222, 461, 79, 22, 490, 103, 488, 411, 556, 759, 545], [], [851, 64, 222, 461, 79, 22, 490, 103, 488, 411, 556, 759, 545], [], [], [851, 724, 64, 222, 461, 19, 79, 534, 492, 22, 613, 490, 103, 488, 711, 411, 556, 759, 545, 622], [], [851, 724, 64, 222, 461, 19, 79, 534, 492, 22, 613, 490, 103, 488, 711, 411, 556, 759, 545, 622], [], [], [492, 103, 556, 759], [], [492, 103, 556, 759], [], [], [], [], [], [], [], [], [], [], [], [], [724, 19, 534, 613, 711, 622], [], [724, 19, 534, 613, 711, 622], [], [], [461, 545], [461, 545], [], [], [], [], [], [], [], [], [], [], [], [], [724, 19, 534, 613, 711, 622], [], [724, 19, 534, 613, 711, 622], [], []]

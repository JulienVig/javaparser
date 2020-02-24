var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":191,"id":24169,"methods":[{"el":51,"sc":5,"sl":48},{"el":56,"sc":5,"sl":53},{"el":65,"sc":5,"sl":58},{"el":70,"sc":5,"sl":67},{"el":75,"sc":5,"sl":72},{"el":83,"sc":5,"sl":77},{"el":88,"sc":5,"sl":85},{"el":98,"sc":13,"sl":95},{"el":103,"sc":13,"sl":100},{"el":108,"sc":13,"sl":105},{"el":110,"sc":5,"sl":90},{"el":115,"sc":5,"sl":112},{"el":124,"sc":5,"sl":117},{"el":132,"sc":5,"sl":126},{"el":137,"sc":5,"sl":134},{"el":142,"sc":5,"sl":139},{"el":147,"sc":5,"sl":144},{"el":158,"sc":5,"sl":149}],"name":"VisitorSet","sl":39},{"el":189,"id":24233,"methods":[{"el":165,"sc":9,"sl":163},{"el":170,"sc":9,"sl":167},{"el":175,"sc":9,"sl":172},{"el":180,"sc":9,"sl":177},{"el":188,"sc":9,"sl":182}],"name":"VisitorSet.EqualsHashcodeOverridingFacade","sl":160}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1175":{"methods":[{"sl":48},{"sl":53},{"sl":58},{"sl":67},{"sl":126},{"sl":134},{"sl":163},{"sl":177},{"sl":182}],"name":"visitorSetRetainAll","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":55},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":69},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":136},{"sl":164},{"sl":179},{"sl":184},{"sl":187}]},"test_1342":{"methods":[{"sl":48},{"sl":53},{"sl":58},{"sl":72},{"sl":77},{"sl":134},{"sl":163},{"sl":177},{"sl":182}],"name":"visitorSetContainsAll","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":55},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":79},{"sl":80},{"sl":82},{"sl":136},{"sl":164},{"sl":179},{"sl":184},{"sl":187}]},"test_1374":{"methods":[{"sl":48},{"sl":53},{"sl":112},{"sl":163},{"sl":177},{"sl":182}],"name":"visitorSetRemove","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":55},{"sl":114},{"sl":164},{"sl":179},{"sl":184},{"sl":187}]},"test_1424":{"methods":[{"sl":48},{"sl":53},{"sl":58},{"sl":72},{"sl":144},{"sl":163},{"sl":177},{"sl":182}],"name":"visitorSetToArray","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":55},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":146},{"sl":164},{"sl":179},{"sl":184},{"sl":187}]},"test_1666":{"methods":[{"sl":48},{"sl":53},{"sl":72},{"sl":163},{"sl":177},{"sl":182}],"name":"visitorSetContains","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":55},{"sl":74},{"sl":164},{"sl":179},{"sl":184},{"sl":187}]},"test_1726":{"methods":[{"sl":48},{"sl":53},{"sl":134},{"sl":163},{"sl":177},{"sl":182}],"name":"objectIdentityEqualsDoesShallowCompare","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":55},{"sl":136},{"sl":164},{"sl":179},{"sl":184},{"sl":187}]},"test_1913":{"methods":[{"sl":48},{"sl":53},{"sl":58},{"sl":112},{"sl":117},{"sl":134},{"sl":163},{"sl":177},{"sl":182}],"name":"visitorSetRemoveAll","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":55},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":114},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":136},{"sl":164},{"sl":179},{"sl":184},{"sl":187}]},"test_985":{"methods":[{"sl":48},{"sl":53},{"sl":90},{"sl":100},{"sl":105},{"sl":134},{"sl":163},{"sl":177},{"sl":182}],"name":"visitorSetIterator","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":55},{"sl":92},{"sl":102},{"sl":107},{"sl":136},{"sl":164},{"sl":179},{"sl":184},{"sl":187}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [985, 1175, 1342, 1374, 1913, 1666, 1726, 1424], [985, 1175, 1342, 1374, 1913, 1666, 1726, 1424], [985, 1175, 1342, 1374, 1913, 1666, 1726, 1424], [], [], [985, 1175, 1342, 1374, 1913, 1666, 1726, 1424], [], [985, 1175, 1342, 1374, 1913, 1666, 1726, 1424], [], [], [1175, 1342, 1913, 1424], [], [1175, 1342, 1913, 1424], [1175, 1342, 1913, 1424], [1175, 1342, 1913, 1424], [1175, 1342, 1913, 1424], [1175, 1342, 1913, 1424], [], [], [1175], [], [1175], [], [], [1342, 1666, 1424], [], [1342, 1666, 1424], [], [], [1342], [], [1342], [1342], [], [1342], [], [], [], [], [], [], [], [985], [], [985], [], [], [], [], [], [], [], [985], [], [985], [], [], [985], [], [985], [], [], [], [], [1374, 1913], [], [1374, 1913], [], [], [1913], [], [1913], [1913], [1913], [1913], [1913], [], [], [1175], [], [1175], [1175], [1175], [1175], [], [], [985, 1175, 1342, 1913, 1726], [], [985, 1175, 1342, 1913, 1726], [], [], [], [], [], [], [], [1424], [], [1424], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [985, 1175, 1342, 1374, 1913, 1666, 1726, 1424], [985, 1175, 1342, 1374, 1913, 1666, 1726, 1424], [], [], [], [], [], [], [], [], [], [], [], [], [985, 1175, 1342, 1374, 1913, 1666, 1726, 1424], [], [985, 1175, 1342, 1374, 1913, 1666, 1726, 1424], [], [], [985, 1175, 1342, 1374, 1913, 1666, 1726, 1424], [], [985, 1175, 1342, 1374, 1913, 1666, 1726, 1424], [], [], [985, 1175, 1342, 1374, 1913, 1666, 1726, 1424], [], [], [], []]

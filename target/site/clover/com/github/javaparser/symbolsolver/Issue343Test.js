var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":82,"id":17627,"methods":[{"el":44,"sc":5,"sl":42},{"el":50,"sc":5,"sl":46},{"el":55,"sc":5,"sl":52},{"el":60,"sc":5,"sl":57},{"el":65,"sc":5,"sl":62},{"el":71,"sc":5,"sl":68},{"el":76,"sc":5,"sl":73},{"el":81,"sc":5,"sl":78}],"name":"Issue343Test","sl":37}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_107":{"methods":[{"sl":42},{"sl":68}],"name":"toResolveFloatWeNeedTheAST","pass":true,"statements":[{"sl":43},{"sl":70}]},"test_191":{"methods":[{"sl":42},{"sl":52}],"name":"resolveStringLiteralOutsideAST","pass":true,"statements":[{"sl":43},{"sl":54}]},"test_513":{"methods":[{"sl":42},{"sl":73}],"name":"resolveMethodCallOnStringLiteralOutsideAST","pass":true,"statements":[{"sl":43},{"sl":75}]},"test_61":{"methods":[{"sl":42},{"sl":78}],"name":"resolveLocaleOutsideAST","pass":true,"statements":[{"sl":43},{"sl":80}]},"test_661":{"methods":[{"sl":42},{"sl":57}],"name":"resolveIntegerLiteralOutsideAST","pass":true,"statements":[{"sl":43},{"sl":59}]},"test_754":{"methods":[{"sl":42},{"sl":62}],"name":"toResolveDoubleWeNeedTheAST","pass":true,"statements":[{"sl":43},{"sl":64}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [661, 191, 754, 107, 61, 513], [661, 191, 754, 107, 61, 513], [], [], [], [], [], [], [], [], [191], [], [191], [], [], [661], [], [661], [], [], [754], [], [754], [], [], [], [107], [], [107], [], [], [513], [], [513], [], [], [61], [], [61], [], []]

var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":67,"id":7076,"methods":[{"el":50,"sc":5,"sl":46},{"el":55,"sc":5,"sl":52},{"el":65,"sc":5,"sl":57}],"name":"Issue257Test","sl":42}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_33":{"methods":[{"sl":57}],"name":"issue257","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64}]},"test_672":{"methods":[{"sl":52}],"name":"verifyBCanBeSolved","pass":true,"statements":[{"sl":54}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [672], [], [672], [], [], [33], [], [33], [33], [33], [33], [33], [33], [], [], []]

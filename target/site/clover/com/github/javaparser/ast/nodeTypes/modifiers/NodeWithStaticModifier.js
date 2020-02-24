var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":43,"id":59078,"methods":[{"el":36,"sc":5,"sl":34},{"el":41,"sc":5,"sl":38}],"name":"NodeWithStaticModifier","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1009":{"methods":[{"sl":34}],"name":"nonStaticNestedClass","pass":true,"statements":[{"sl":35}]},"test_1772":{"methods":[{"sl":34}],"name":"staticNestedClass","pass":true,"statements":[{"sl":35}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1009, 1772], [1009, 1772], [], [], [], [], [], [], [], []]

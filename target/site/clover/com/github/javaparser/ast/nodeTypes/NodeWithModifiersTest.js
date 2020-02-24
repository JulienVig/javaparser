var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":96,"id":32639,"methods":[{"el":50,"sc":5,"sl":44},{"el":61,"sc":13,"sl":58},{"el":66,"sc":5,"sl":52},{"el":73,"sc":5,"sl":68},{"el":81,"sc":5,"sl":75},{"el":89,"sc":5,"sl":83},{"el":95,"sc":5,"sl":91}],"name":"NodeWithModifiersTest","sl":42}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1088":{"methods":[{"sl":83},{"sl":91}],"name":"keepModifiersThatShouldNotBeRemoved","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":88},{"sl":92},{"sl":93},{"sl":94}]},"test_1159":{"methods":[{"sl":52},{"sl":58}],"name":"addModifierTriggerNotification","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":57},{"sl":60},{"sl":63},{"sl":64},{"sl":65}]},"test_1266":{"methods":[{"sl":44}],"name":"addModifierWorks","pass":true,"statements":[{"sl":46},{"sl":48},{"sl":49}]},"test_1479":{"methods":[{"sl":68},{"sl":91}],"name":"removeExistingModifier","pass":true,"statements":[{"sl":70},{"sl":71},{"sl":72},{"sl":92},{"sl":93},{"sl":94}]},"test_1755":{"methods":[{"sl":75},{"sl":91}],"name":"ignoreNotExistingModifiersOnRemove","pass":true,"statements":[{"sl":77},{"sl":78},{"sl":80},{"sl":92},{"sl":93},{"sl":94}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1266], [], [1266], [], [1266], [1266], [], [], [1159], [], [1159], [1159], [], [1159], [1159], [], [1159], [], [], [1159], [1159], [1159], [], [], [1479], [], [1479], [1479], [1479], [], [], [1755], [], [1755], [1755], [], [1755], [], [], [1088], [], [1088], [1088], [], [1088], [], [], [1479, 1755, 1088], [1479, 1755, 1088], [1479, 1755, 1088], [1479, 1755, 1088], [], []]

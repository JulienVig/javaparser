var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":123,"id":27003,"methods":[{"el":45,"sc":5,"sl":42},{"el":54,"sc":5,"sl":50},{"el":60,"sc":5,"sl":56},{"el":66,"sc":5,"sl":62},{"el":74,"sc":5,"sl":68},{"el":80,"sc":5,"sl":76},{"el":86,"sc":5,"sl":82},{"el":91,"sc":5,"sl":88},{"el":99,"sc":5,"sl":93},{"el":105,"sc":5,"sl":101},{"el":111,"sc":5,"sl":107},{"el":116,"sc":5,"sl":113},{"el":122,"sc":5,"sl":118}],"name":"UnparsableStmt","sl":40}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1049":{"methods":[{"sl":50}],"name":"bodystatementClosingBraceRecovery","pass":true,"statements":[{"sl":52},{"sl":53}]},"test_1886":{"methods":[{"sl":50},{"sl":62},{"sl":82},{"sl":88}],"name":"bodystatementSemicolonRecovery","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":65},{"sl":85},{"sl":90}]},"test_1912":{"methods":[{"sl":50},{"sl":62},{"sl":82},{"sl":88}],"name":"labeledStatementSemicolonRecovery","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":65},{"sl":85},{"sl":90}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1886, 1049, 1912], [], [1886, 1049, 1912], [1886, 1049, 1912], [], [], [], [], [], [], [], [], [1886, 1912], [], [], [1886, 1912], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1886, 1912], [], [], [1886, 1912], [], [], [1886, 1912], [], [1886, 1912], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]

var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":88,"id":20493,"methods":[{"el":57,"sc":5,"sl":49},{"el":67,"sc":5,"sl":59},{"el":77,"sc":5,"sl":69},{"el":87,"sc":5,"sl":79}],"name":"VarTypeTest","sl":43}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_512":{"methods":[{"sl":59}],"name":"resolveAReferenceType","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":64},{"sl":66}]},"test_783":{"methods":[{"sl":49}],"name":"resolveAPrimitive","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":54},{"sl":56}]},"test_924":{"methods":[{"sl":69}],"name":"failResolveNoInitializer","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74}]},"test_953":{"methods":[{"sl":79}],"name":"failResolveWrongLocation","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":83},{"sl":84}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [783], [], [783], [783], [], [783], [], [783], [], [], [512], [], [512], [512], [], [512], [], [512], [], [], [924], [], [924], [924], [924], [924], [], [], [], [], [953], [], [953], [953], [953], [953], [], [], [], []]

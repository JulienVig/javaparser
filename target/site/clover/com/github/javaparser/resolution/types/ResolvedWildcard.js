var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":183,"id":54563,"methods":[{"el":54,"sc":5,"sl":45},{"el":58,"sc":5,"sl":56},{"el":62,"sc":5,"sl":60},{"el":70,"sc":5,"sl":64},{"el":74,"sc":5,"sl":72},{"el":78,"sc":5,"sl":76},{"el":91,"sc":5,"sl":80},{"el":98,"sc":5,"sl":93},{"el":111,"sc":5,"sl":100},{"el":115,"sc":5,"sl":113},{"el":119,"sc":5,"sl":117},{"el":123,"sc":5,"sl":121},{"el":130,"sc":5,"sl":125},{"el":144,"sc":5,"sl":132},{"el":163,"sc":5,"sl":146},{"el":168,"sc":5,"sl":165},{"el":172,"sc":5,"sl":170},{"el":176,"sc":5,"sl":174}],"name":"ResolvedWildcard","sl":38},{"el":181,"id":54678,"methods":[],"name":"ResolvedWildcard.BoundType","sl":178}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_112":{"methods":[{"sl":45},{"sl":60},{"sl":80},{"sl":113},{"sl":117},{"sl":125}],"name":"testGetAllAncestorsConsideringGenericsCases","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":82},{"sl":83},{"sl":114},{"sl":118},{"sl":126},{"sl":129}]},"test_129":{"methods":[{"sl":45},{"sl":56},{"sl":72},{"sl":76},{"sl":80},{"sl":93},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"consumerUsedInStream","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":96},{"sl":97},{"sl":102},{"sl":104},{"sl":105},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_155":{"methods":[{"sl":45},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"genericCollectionWithWildcards","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_160":{"methods":[{"sl":45},{"sl":60},{"sl":72},{"sl":76},{"sl":113},{"sl":117},{"sl":121}],"name":"resolveUsageOfMethodOfGenericClassWithUnboundedWildcard","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":73},{"sl":77},{"sl":114},{"sl":118},{"sl":122}]},"test_175":{"methods":[{"sl":45},{"sl":56},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"resolveReferenceToLambdaParamSimplified","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_188":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":93},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"lambdaCollect","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":96},{"sl":97},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_195":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":132},{"sl":146}],"name":"issue200","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":134},{"sl":137},{"sl":139},{"sl":140},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_209":{"methods":[{"sl":45},{"sl":56},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125}],"name":"genericMethodWithGenericClassArgument","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":102},{"sl":104},{"sl":105},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129}]},"test_221":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":132},{"sl":146}],"name":"lambdaBlockExplicitReturn","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":134},{"sl":137},{"sl":139},{"sl":140},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_250":{"methods":[{"sl":72},{"sl":76},{"sl":117},{"sl":125},{"sl":132}],"name":"testIsAssignableBySimple","pass":true,"statements":[{"sl":73},{"sl":77},{"sl":118},{"sl":126},{"sl":129},{"sl":134},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":140}]},"test_262":{"methods":[{"sl":45},{"sl":56},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"resolveReferenceToMethodWithLambda","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_284":{"methods":[{"sl":45},{"sl":56},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"resolveLambdaType","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_292":{"methods":[{"sl":100}],"name":"testAsDescribe","pass":true,"statements":[{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_306":{"methods":[{"sl":45},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125}],"name":"testSolveMethodNotExistingBecauseOfTypeParameters","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":102},{"sl":104},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129}]},"test_33":{"methods":[{"sl":45},{"sl":60},{"sl":132},{"sl":146}],"name":"issue257","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":134},{"sl":137},{"sl":139},{"sl":140},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":161}]},"test_359":{"methods":[{"sl":45},{"sl":60},{"sl":72},{"sl":100}],"name":"testSolveMethodExisting","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":73},{"sl":102},{"sl":104},{"sl":106},{"sl":107}]},"test_384":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":132},{"sl":146}],"name":"lambdaMap","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":134},{"sl":137},{"sl":139},{"sl":140},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_406":{"methods":[{"sl":45},{"sl":56},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"resolveTypeUsageOfCascadeMethodInGenericClass","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_417":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":93},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"functionUsedInStream","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":96},{"sl":97},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_433":{"methods":[{"sl":45},{"sl":60},{"sl":100}],"name":"testGetComplexBounds","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":102},{"sl":104},{"sl":106},{"sl":107}]},"test_446":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":93},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":132},{"sl":146}],"name":"lambdaFlatMapIssue","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":96},{"sl":97},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":134},{"sl":137},{"sl":139},{"sl":140},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_460":{"methods":[{"sl":45},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"compatibilityShouldConsiderAlsoTypeVariablesNegative","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":102},{"sl":103},{"sl":104},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":161}]},"test_474":{"methods":[{"sl":45},{"sl":60},{"sl":100},{"sl":146}],"name":"compatibilityShouldConsiderAlsoTypeVariablesRaw","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":102},{"sl":103},{"sl":104},{"sl":106},{"sl":107},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":161}]},"test_477":{"methods":[{"sl":45},{"sl":60},{"sl":100}],"name":"lambdaCollectParam","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":102},{"sl":104},{"sl":106},{"sl":107}]},"test_48":{"methods":[{"sl":45},{"sl":60}],"name":"test_Integer","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61}]},"test_491":{"methods":[{"sl":113},{"sl":117},{"sl":121}],"name":"recognizeProperUpperBound2","pass":true,"statements":[{"sl":114},{"sl":118},{"sl":122}]},"test_502":{"methods":[{"sl":45},{"sl":60},{"sl":72},{"sl":100}],"name":"testSolveMethodExisting","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":73},{"sl":102},{"sl":104},{"sl":106},{"sl":107}]},"test_544":{"methods":[{"sl":45},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"compatibilityShouldConsiderAlsoTypeVariablesPositive","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":102},{"sl":103},{"sl":104},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":161}]},"test_548":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":100}],"name":"lambdaBifunc","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_551":{"methods":[{"sl":45},{"sl":56},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"resolveReferenceToLambdaParam","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_553":{"methods":[{"sl":45},{"sl":60},{"sl":100}],"name":"testGetAllMethods","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":102},{"sl":103},{"sl":104},{"sl":106},{"sl":107}]},"test_566":{"methods":[{"sl":45},{"sl":60}],"name":"classCast","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61}]},"test_578":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":100}],"name":"resolveMethodReferenceExpr","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_579":{"methods":[{"sl":45},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"genericCollectionWithWildcardsAndExtensions","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_588":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":100}],"name":"testGetGenericReturnType","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_608":{"methods":[{"sl":45},{"sl":60},{"sl":72},{"sl":76},{"sl":113},{"sl":117},{"sl":121},{"sl":125}],"name":"resolveUsageOfMethodOfGenericClassWithExtendsWildcard","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":73},{"sl":77},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129}]},"test_612":{"methods":[{"sl":45},{"sl":60}],"name":"typeDeclarationSuperClassImplicitlyIncludeObject","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61}]},"test_616":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":100},{"sl":146}],"name":"lambdaReduce","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_625":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"solveParameterOfLambdaInMethodCallExpr","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_642":{"methods":[{"sl":45},{"sl":56},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":125}],"name":"genericMethodWithGenericClassBasedArgument","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":102},{"sl":104},{"sl":105},{"sl":114},{"sl":118},{"sl":126},{"sl":129}]},"test_66":{"methods":[{"sl":72},{"sl":76},{"sl":80},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":132}],"name":"testIsAssignableByGenerics","pass":true,"statements":[{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":134},{"sl":137},{"sl":139},{"sl":140}]},"test_68":{"methods":[{"sl":80},{"sl":100}],"name":"verifyIssue1491Combined","pass":true,"statements":[{"sl":82},{"sl":102},{"sl":103}]},"test_684":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":100}],"name":"testGetGenericParameters","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_687":{"methods":[{"sl":45},{"sl":60},{"sl":100}],"name":"testGetAllMethods","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":102},{"sl":103},{"sl":104},{"sl":106},{"sl":107}]},"test_69":{"methods":[{"sl":45},{"sl":56},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"resolveReferenceToCallOnLambdaParam","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_691":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":132},{"sl":146}],"name":"lambdaPrimitivesIssue","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":134},{"sl":137},{"sl":139},{"sl":140},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_705":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":100},{"sl":146}],"name":"biFunctionUsedInStream","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_71":{"methods":[{"sl":45},{"sl":56},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"resolveReferenceToLambdaParamBase","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_729":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":100}],"name":"testGetFunctionalMethodPositiveCasesOnInterfaces","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_768":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":100}],"name":"testParameterNameOnClassesFromTheStdLibrary","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_776":{"methods":[{"sl":45},{"sl":56},{"sl":72},{"sl":76},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125}],"name":"typeOfVoidLambda","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":73},{"sl":77},{"sl":102},{"sl":104},{"sl":105},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129}]},"test_782":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":132},{"sl":146}],"name":"lambdaBlockMultiLineReturn","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":134},{"sl":137},{"sl":139},{"sl":140},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_788":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":100}],"name":"resolveExpressions","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_797":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":72},{"sl":76},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":146}],"name":"lambdaMapParameter","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":73},{"sl":77},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":114},{"sl":118},{"sl":122},{"sl":126},{"sl":129},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_80":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":100}],"name":"testGetSignature","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_834":{"methods":[{"sl":80},{"sl":100}],"name":"verifyIssue1491ResolvingStaticMethodCalls","pass":true,"statements":[{"sl":82},{"sl":102},{"sl":103}]},"test_839":{"methods":[{"sl":45},{"sl":60},{"sl":100}],"name":"testGetAllMethods","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":102},{"sl":103},{"sl":104},{"sl":106},{"sl":107}]},"test_854":{"methods":[{"sl":45},{"sl":56},{"sl":60},{"sl":100}],"name":"testConvertTypeToUsage","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":57},{"sl":61},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_857":{"methods":[{"sl":45},{"sl":60},{"sl":72},{"sl":100}],"name":"testSolveMethodExisting","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":73},{"sl":102},{"sl":104},{"sl":106},{"sl":107}]},"test_871":{"methods":[{"sl":72},{"sl":80},{"sl":100},{"sl":113},{"sl":117},{"sl":121}],"name":"resolveVariadicMethodWithGenericArgument","pass":true,"statements":[{"sl":73},{"sl":82},{"sl":83},{"sl":102},{"sl":103},{"sl":114},{"sl":118},{"sl":122}]},"test_884":{"methods":[{"sl":64}],"name":"testAsReferenceTypeUsage","pass":true,"statements":[{"sl":66}]},"test_889":{"methods":[{"sl":64}],"name":"testAsPrimitive","pass":true,"statements":[{"sl":66}]},"test_893":{"methods":[{"sl":72}],"name":"testIsReference","pass":true,"statements":[{"sl":73}]},"test_897":{"methods":[{"sl":45},{"sl":80},{"sl":146}],"name":"testReplaceParam","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":82},{"sl":83},{"sl":85},{"sl":87},{"sl":88},{"sl":90},{"sl":148},{"sl":151},{"sl":152},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":161}]},"test_922":{"methods":[{"sl":64}],"name":"testAsArrayTypeUsage","pass":true,"statements":[{"sl":66}]},"test_942":{"methods":[{"sl":64}],"name":"testAsTypeParameter","pass":true,"statements":[{"sl":66}]},"test_946":{"methods":[{"sl":76}],"name":"testAsWildcard","pass":true,"statements":[{"sl":77}]},"test_956":{"methods":[{"sl":72}],"name":"testIsWildcard","pass":true,"statements":[{"sl":73}]},"test_99":{"methods":[{"sl":45},{"sl":60},{"sl":132},{"sl":146}],"name":"testOverloadedMethods","pass":true,"statements":[{"sl":46},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":134},{"sl":137},{"sl":139},{"sl":140},{"sl":148},{"sl":151},{"sl":154},{"sl":155},{"sl":158},{"sl":161}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [502, 209, 48, 551, 195, 782, 548, 160, 446, 33, 474, 612, 175, 262, 776, 854, 306, 433, 788, 284, 588, 691, 729, 477, 687, 608, 768, 460, 684, 129, 112, 384, 417, 797, 155, 897, 71, 80, 188, 99, 566, 69, 839, 625, 544, 642, 579, 616, 359, 857, 578, 705, 406, 221, 553], [502, 209, 48, 551, 195, 782, 548, 160, 446, 33, 474, 612, 175, 262, 776, 854, 306, 433, 788, 284, 588, 691, 729, 477, 687, 608, 768, 460, 684, 129, 112, 384, 417, 797, 155, 897, 71, 80, 188, 99, 566, 69, 839, 625, 544, 642, 579, 616, 359, 857, 578, 705, 406, 221, 553], [], [], [502, 209, 48, 551, 195, 782, 548, 160, 446, 33, 474, 612, 175, 262, 776, 854, 306, 433, 788, 284, 588, 691, 729, 477, 687, 608, 768, 460, 684, 129, 112, 384, 417, 797, 155, 897, 71, 80, 188, 99, 566, 69, 839, 625, 544, 642, 579, 616, 359, 857, 578, 705, 406, 221, 553], [], [], [502, 209, 48, 551, 195, 782, 548, 160, 446, 33, 474, 612, 175, 262, 776, 854, 306, 433, 788, 284, 588, 691, 729, 477, 687, 608, 768, 460, 684, 129, 112, 384, 417, 797, 155, 897, 71, 80, 188, 99, 566, 69, 839, 625, 544, 642, 579, 616, 359, 857, 578, 705, 406, 221, 553], [502, 209, 48, 551, 195, 782, 548, 160, 446, 33, 474, 612, 175, 262, 776, 854, 306, 433, 788, 284, 588, 691, 729, 477, 687, 608, 768, 460, 684, 129, 112, 384, 417, 797, 155, 897, 71, 80, 188, 99, 566, 69, 839, 625, 544, 642, 579, 616, 359, 857, 578, 705, 406, 221, 553], [], [], [209, 551, 195, 782, 548, 446, 175, 262, 776, 854, 788, 284, 588, 691, 729, 768, 684, 129, 384, 417, 797, 71, 80, 188, 69, 625, 642, 616, 578, 705, 406, 221], [209, 551, 195, 782, 548, 446, 175, 262, 776, 854, 788, 284, 588, 691, 729, 768, 684, 129, 384, 417, 797, 71, 80, 188, 69, 625, 642, 616, 578, 705, 406, 221], [], [], [502, 48, 195, 782, 548, 160, 446, 33, 474, 612, 854, 306, 433, 788, 588, 691, 729, 477, 687, 608, 768, 460, 684, 112, 384, 417, 797, 155, 80, 188, 99, 566, 839, 625, 544, 579, 616, 359, 857, 578, 705, 221, 553], [502, 48, 195, 782, 548, 160, 446, 33, 474, 612, 854, 306, 433, 788, 588, 691, 729, 477, 687, 608, 768, 460, 684, 112, 384, 417, 797, 155, 80, 188, 99, 566, 839, 625, 544, 579, 616, 359, 857, 578, 705, 221, 553], [], [], [922, 889, 942, 884], [], [922, 889, 942, 884], [], [], [], [], [], [502, 209, 551, 195, 782, 160, 446, 175, 262, 776, 893, 306, 284, 691, 250, 608, 460, 129, 384, 417, 871, 797, 155, 71, 188, 956, 69, 625, 544, 66, 642, 579, 359, 857, 406, 221], [502, 209, 551, 195, 782, 160, 446, 175, 262, 776, 893, 306, 284, 691, 250, 608, 460, 129, 384, 417, 871, 797, 155, 71, 188, 956, 69, 625, 544, 66, 642, 579, 359, 857, 406, 221], [], [], [209, 551, 195, 782, 160, 446, 175, 262, 776, 306, 946, 284, 691, 250, 608, 460, 129, 384, 417, 797, 155, 71, 188, 69, 625, 544, 66, 642, 579, 406, 221], [209, 551, 195, 782, 160, 446, 175, 262, 776, 306, 946, 284, 691, 250, 608, 460, 129, 384, 417, 797, 155, 71, 188, 69, 625, 544, 66, 642, 579, 406, 221], [], [], [209, 551, 195, 782, 446, 175, 262, 306, 284, 68, 691, 834, 460, 129, 112, 384, 417, 871, 797, 155, 897, 71, 188, 69, 625, 544, 66, 642, 579, 406, 221], [], [209, 551, 195, 782, 446, 175, 262, 306, 284, 68, 691, 834, 460, 129, 112, 384, 417, 871, 797, 155, 897, 71, 188, 69, 625, 544, 66, 642, 579, 406, 221], [209, 551, 195, 782, 446, 175, 262, 306, 284, 691, 460, 129, 112, 384, 417, 871, 797, 155, 897, 71, 188, 69, 625, 544, 66, 642, 579, 406, 221], [], [551, 195, 782, 446, 175, 262, 284, 691, 129, 384, 417, 797, 155, 897, 71, 188, 69, 625, 66, 579, 406, 221], [], [551, 195, 782, 446, 175, 262, 284, 691, 129, 384, 417, 797, 155, 897, 71, 188, 69, 625, 66, 579, 406, 221], [551, 195, 782, 446, 175, 262, 284, 691, 129, 384, 417, 797, 155, 897, 71, 188, 69, 625, 66, 579, 406, 221], [], [551, 195, 782, 446, 175, 262, 284, 691, 129, 384, 417, 797, 155, 897, 71, 188, 69, 625, 579, 406, 221], [], [], [446, 129, 417, 188], [], [446, 129, 417, 188], [446, 129, 417, 188], [446, 129, 417, 188], [], [], [502, 209, 551, 195, 782, 548, 446, 474, 175, 262, 776, 854, 306, 433, 788, 284, 588, 68, 691, 729, 477, 687, 768, 834, 460, 684, 129, 384, 417, 871, 797, 155, 71, 80, 188, 69, 839, 625, 544, 642, 292, 579, 616, 359, 857, 578, 705, 406, 221, 553], [], [502, 209, 551, 195, 782, 548, 446, 474, 175, 262, 776, 854, 306, 433, 788, 284, 588, 68, 691, 729, 477, 687, 768, 834, 460, 684, 129, 384, 417, 871, 797, 155, 71, 80, 188, 69, 839, 625, 544, 642, 292, 579, 616, 359, 857, 578, 705, 406, 221, 553], [474, 788, 68, 687, 834, 460, 871, 839, 544, 292, 553], [502, 209, 551, 195, 782, 548, 446, 474, 175, 262, 776, 854, 306, 433, 788, 284, 588, 691, 729, 477, 687, 768, 460, 684, 129, 384, 417, 797, 155, 71, 80, 188, 69, 839, 625, 544, 642, 292, 579, 616, 359, 857, 578, 705, 406, 221, 553], [209, 551, 195, 782, 548, 446, 175, 262, 776, 854, 788, 284, 588, 691, 729, 768, 684, 129, 384, 417, 797, 71, 80, 188, 69, 625, 642, 292, 616, 578, 705, 406, 221], [502, 195, 782, 548, 446, 474, 854, 306, 433, 788, 588, 691, 729, 477, 687, 768, 460, 684, 384, 417, 797, 155, 80, 188, 839, 625, 544, 292, 579, 616, 359, 857, 578, 705, 221, 553], [502, 195, 782, 548, 446, 474, 854, 306, 433, 788, 588, 691, 729, 477, 687, 768, 460, 684, 384, 417, 797, 155, 80, 188, 839, 625, 544, 292, 579, 616, 359, 857, 578, 705, 221, 553], [], [], [], [], [], [209, 551, 195, 782, 160, 446, 175, 262, 776, 306, 284, 691, 491, 608, 460, 129, 112, 384, 417, 871, 797, 155, 71, 188, 69, 625, 544, 66, 642, 579, 406, 221], [209, 551, 195, 782, 160, 446, 175, 262, 776, 306, 284, 691, 491, 608, 460, 129, 112, 384, 417, 871, 797, 155, 71, 188, 69, 625, 544, 66, 642, 579, 406, 221], [], [], [209, 551, 195, 782, 160, 446, 175, 262, 776, 306, 284, 691, 250, 491, 608, 460, 129, 112, 384, 417, 871, 797, 155, 71, 188, 69, 625, 544, 66, 642, 579, 406, 221], [209, 551, 195, 782, 160, 446, 175, 262, 776, 306, 284, 691, 250, 491, 608, 460, 129, 112, 384, 417, 871, 797, 155, 71, 188, 69, 625, 544, 66, 642, 579, 406, 221], [], [], [209, 551, 195, 782, 160, 446, 175, 262, 776, 306, 284, 691, 491, 608, 460, 129, 384, 417, 871, 797, 155, 71, 188, 69, 625, 544, 66, 579, 406, 221], [209, 551, 195, 782, 160, 446, 175, 262, 776, 306, 284, 691, 491, 608, 460, 129, 384, 417, 871, 797, 155, 71, 188, 69, 625, 544, 66, 579, 406, 221], [], [], [209, 551, 195, 782, 446, 175, 262, 776, 306, 284, 691, 250, 608, 460, 129, 112, 384, 417, 797, 155, 71, 188, 69, 625, 544, 66, 642, 579, 406, 221], [209, 551, 195, 782, 446, 175, 262, 776, 306, 284, 691, 250, 608, 460, 129, 112, 384, 417, 797, 155, 71, 188, 69, 625, 544, 66, 642, 579, 406, 221], [], [], [209, 551, 195, 782, 446, 175, 262, 776, 306, 284, 691, 250, 608, 460, 129, 112, 384, 417, 797, 155, 71, 188, 69, 625, 544, 66, 642, 579, 406, 221], [], [], [195, 782, 446, 33, 691, 250, 384, 99, 66, 221], [], [195, 782, 446, 33, 691, 250, 384, 99, 66, 221], [], [250], [195, 782, 446, 33, 691, 250, 384, 99, 66, 221], [250], [195, 782, 446, 33, 691, 250, 384, 99, 66, 221], [195, 782, 446, 33, 691, 250, 384, 99, 66, 221], [], [], [], [], [], [551, 195, 782, 446, 33, 474, 175, 262, 284, 691, 460, 129, 384, 417, 797, 155, 897, 71, 188, 99, 69, 625, 544, 579, 616, 705, 406, 221], [], [551, 195, 782, 446, 33, 474, 175, 262, 284, 691, 460, 129, 384, 417, 797, 155, 897, 71, 188, 99, 69, 625, 544, 579, 616, 705, 406, 221], [], [], [551, 195, 782, 446, 33, 474, 175, 262, 284, 691, 460, 129, 384, 417, 797, 155, 897, 71, 188, 99, 69, 625, 544, 579, 616, 705, 406, 221], [897], [], [551, 195, 782, 446, 33, 474, 175, 262, 284, 691, 460, 129, 384, 417, 797, 155, 897, 71, 188, 99, 69, 625, 544, 579, 616, 705, 406, 221], [551, 195, 782, 446, 33, 474, 175, 262, 284, 691, 460, 129, 384, 417, 797, 155, 897, 71, 188, 99, 69, 625, 544, 579, 616, 705, 406, 221], [], [], [551, 195, 782, 446, 33, 474, 175, 262, 284, 691, 460, 129, 384, 417, 797, 155, 897, 71, 188, 99, 69, 625, 544, 579, 616, 705, 406, 221], [551, 195, 782, 446, 175, 262, 284, 691, 129, 384, 417, 797, 155, 897, 71, 188, 69, 625, 579, 616, 705, 406, 221], [], [551, 195, 782, 446, 33, 474, 175, 262, 284, 691, 460, 129, 384, 417, 797, 155, 897, 71, 188, 99, 69, 625, 544, 579, 616, 705, 406, 221], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]

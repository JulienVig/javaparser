var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":53,"id":9508,"methods":[{"el":40,"sc":5,"sl":38},{"el":52,"sc":5,"sl":42}],"name":"ContextHelper","sl":36}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_109":{"methods":[{"sl":42}],"name":"resolveComplexGenericReturnType","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_129":{"methods":[{"sl":42}],"name":"consumerUsedInStream","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_13":{"methods":[{"sl":42}],"name":"resolveLocalAndSeveralAnnidatedLevels","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_137":{"methods":[{"sl":42}],"name":"resolveElementOfList","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_139":{"methods":[{"sl":42}],"name":"testFieldAccessThroughClassAndThis","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_153":{"methods":[{"sl":42}],"name":"resolveUsageOfMethodOfGenericClass","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_155":{"methods":[{"sl":42}],"name":"genericCollectionWithWildcards","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_160":{"methods":[{"sl":42}],"name":"resolveUsageOfMethodOfGenericClassWithUnboundedWildcard","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_161":{"methods":[{"sl":42}],"name":"typeOfPlusExpressionsCharAndString","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_175":{"methods":[{"sl":42}],"name":"resolveReferenceToLambdaParamSimplified","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_176":{"methods":[{"sl":42}],"name":"test_int","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_180":{"methods":[{"sl":42}],"name":"resolveGenericReturnTypeOfMethodInJar","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_188":{"methods":[{"sl":42}],"name":"lambdaCollect","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_192":{"methods":[{"sl":42}],"name":"resolveCompoundGenericReturnTypeOfMethodInJar","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_195":{"methods":[{"sl":42}],"name":"issue200","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_203":{"methods":[{"sl":42}],"name":"resolveTypeUsageOfFirstMethodInGenericClass","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_217":{"methods":[{"sl":42}],"name":"resolveInheritedMethodFromInterface","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_221":{"methods":[{"sl":42}],"name":"lambdaBlockExplicitReturn","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_248":{"methods":[{"sl":42}],"name":"resolveTypeUsageOfMethodInGenericClass","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_258":{"methods":[{"sl":42}],"name":"methodCallWithReferenceTypeAsVaridicArgumentIsSolved","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_259":{"methods":[{"sl":42}],"name":"givenImport_whenCompiles_expectPass","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_261":{"methods":[{"sl":42}],"name":"resolveCascadeOfReferencesToMethod","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_262":{"methods":[{"sl":42}],"name":"resolveReferenceToMethodWithLambda","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_27":{"methods":[{"sl":42}],"name":"solveMethodCallInFieldAccessContext","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_284":{"methods":[{"sl":42}],"name":"resolveLambdaType","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_293":{"methods":[{"sl":42}],"name":"callingSuperClassInnerClassMethod","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_300":{"methods":[{"sl":42}],"name":"solveMethodInInterfaceParent","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_31":{"methods":[{"sl":42}],"name":"test","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_319":{"methods":[{"sl":42}],"name":"typeParamOnReturnType","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_324":{"methods":[{"sl":42}],"name":"issue1482","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_33":{"methods":[{"sl":42}],"name":"issue257","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_347":{"methods":[{"sl":42}],"name":"solvingReferenceToUnsupportedOperationException","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_351":{"methods":[{"sl":42}],"name":"issue2044_simpleTypeVariable","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_363":{"methods":[{"sl":42}],"name":"resolveReferenceToOverloadMethodFindOnlyCompatible","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_373":{"methods":[{"sl":42}],"name":"personsStream","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_384":{"methods":[{"sl":42}],"name":"lambdaMap","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_398":{"methods":[{"sl":42}],"name":"typeOfPlusExpressionsStringAndChar","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_406":{"methods":[{"sl":42}],"name":"resolveTypeUsageOfCascadeMethodInGenericClass","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_411":{"methods":[{"sl":42}],"name":"lambdaPrint","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_417":{"methods":[{"sl":42}],"name":"functionUsedInStream","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_422":{"methods":[{"sl":42}],"name":"resolveReferenceToMethodWithGenericArrayTypeParam","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_439":{"methods":[{"sl":42}],"name":"conditionalExpressionExampleFollowUp1","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_441":{"methods":[{"sl":42}],"name":"issue2044_typeVariableExtendsObject","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_446":{"methods":[{"sl":42}],"name":"lambdaFlatMapIssue","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_456":{"methods":[{"sl":42}],"name":"typeParamOnReturnTypeStep3","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_471":{"methods":[{"sl":42}],"name":"callingAnonymousClassInnerMethod","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_473":{"methods":[{"sl":42}],"name":"resolveReferenceToOverloadMethodFindStricter","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_48":{"methods":[{"sl":42}],"name":"test_Integer","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_488":{"methods":[{"sl":42}],"name":"issue1485withoutSpecifyingJARs","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_490":{"methods":[{"sl":42}],"name":"test","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_513":{"methods":[{"sl":42}],"name":"resolveMethodCallOnStringLiteralOutsideAST","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_534":{"methods":[{"sl":42}],"name":"enumAndStaticInitializer","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_548":{"methods":[{"sl":42}],"name":"lambdaBifunc","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_55":{"methods":[{"sl":42}],"name":"conditionalExpressionExample","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_551":{"methods":[{"sl":42}],"name":"resolveReferenceToLambdaParam","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_554":{"methods":[{"sl":42}],"name":"accessEnumMethodThroughThis","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_566":{"methods":[{"sl":42}],"name":"classCast","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_571":{"methods":[{"sl":42}],"name":"variadicIssue","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_573":{"methods":[{"sl":42}],"name":"resolveSimpleGenericReturnTypeOfMethodInJar","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_574":{"methods":[{"sl":42}],"name":"solveGenericMethodCallCanInferFromArguments","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_577":{"methods":[{"sl":42}],"name":"callingScopedAnonymousClassInnerMethod","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_579":{"methods":[{"sl":42}],"name":"genericCollectionWithWildcardsAndExtensions","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_591":{"methods":[{"sl":42}],"name":"methodWithGenericParameterTypes","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_601":{"methods":[{"sl":42}],"name":"testSolvingMethodWitPrimitiveParameterTypeAsUsage","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_608":{"methods":[{"sl":42}],"name":"resolveUsageOfMethodOfGenericClassWithExtendsWildcard","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_612":{"methods":[{"sl":42}],"name":"typeDeclarationSuperClassImplicitlyIncludeObject","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_616":{"methods":[{"sl":42}],"name":"lambdaReduce","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_617":{"methods":[{"sl":42}],"name":"usingAnonymousSuperClassInnerType","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_62":{"methods":[{"sl":42}],"name":"resolveMethodOnGenericClass","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_625":{"methods":[{"sl":42}],"name":"solveParameterOfLambdaInMethodCallExpr","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_633":{"methods":[{"sl":42}],"name":"solveGenericMethodCallMustUseProvidedTypeArgs","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_654":{"methods":[{"sl":42}],"name":"resolveUsageOfMethodOfGenericClassWithGenericReturnType","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_69":{"methods":[{"sl":42}],"name":"resolveReferenceToCallOnLambdaParam","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_691":{"methods":[{"sl":42}],"name":"lambdaPrimitivesIssue","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_693":{"methods":[{"sl":42}],"name":"solveNestedMethodCallExprContextWithoutScope","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_705":{"methods":[{"sl":42}],"name":"biFunctionUsedInStream","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_71":{"methods":[{"sl":42}],"name":"resolveReferenceToLambdaParamBase","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_712":{"methods":[{"sl":42}],"name":"doTest_withJavaParserFacade_explicit","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_736":{"methods":[{"sl":42}],"name":"resolveReferenceToOverloadMethodWithNullParam","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_75":{"methods":[{"sl":42}],"name":"resolveNestedGenericReturnTypeOfMethodInJar","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_776":{"methods":[{"sl":42}],"name":"typeOfVoidLambda","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_780":{"methods":[{"sl":42}],"name":"usingAnonymousClassInnerType","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_782":{"methods":[{"sl":42}],"name":"lambdaBlockMultiLineReturn","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_794":{"methods":[{"sl":42}],"name":"biFunctionInMethodCall","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_797":{"methods":[{"sl":42}],"name":"lambdaMapParameter","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_817":{"methods":[{"sl":42}],"name":"selectMostSpecificVariadic","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_830":{"methods":[{"sl":42}],"name":"methodTypeParams","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_837":{"methods":[{"sl":42}],"name":"resolveElementOfListAdvancedExample","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_858":{"methods":[{"sl":42}],"name":"solveMethodAccessThroughSuper","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_99":{"methods":[{"sl":42}],"name":"testOverloadedMethods","pass":true,"statements":[{"sl":46},{"sl":47}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [48, 551, 161, 195, 782, 217, 633, 817, 441, 473, 548, 351, 736, 160, 176, 411, 654, 446, 203, 261, 33, 612, 175, 262, 776, 109, 319, 780, 192, 577, 693, 180, 422, 248, 324, 363, 284, 490, 574, 712, 591, 488, 691, 55, 608, 300, 13, 293, 139, 259, 456, 571, 129, 137, 554, 384, 417, 75, 153, 797, 155, 398, 830, 31, 71, 513, 188, 258, 439, 99, 566, 601, 69, 534, 27, 625, 794, 62, 579, 373, 616, 347, 471, 617, 837, 705, 406, 573, 858, 221], [], [], [], [48, 551, 161, 195, 782, 217, 633, 817, 441, 473, 548, 351, 736, 160, 176, 411, 654, 446, 203, 261, 33, 612, 175, 262, 776, 109, 319, 780, 192, 577, 693, 180, 422, 248, 324, 363, 284, 490, 574, 712, 591, 488, 691, 55, 608, 300, 13, 293, 139, 259, 456, 571, 129, 137, 554, 384, 417, 75, 153, 797, 155, 398, 830, 31, 71, 513, 188, 258, 439, 99, 566, 601, 69, 534, 27, 625, 794, 62, 579, 373, 616, 347, 471, 617, 837, 705, 406, 573, 858, 221], [48, 551, 161, 195, 782, 217, 633, 817, 441, 473, 548, 351, 736, 160, 176, 411, 654, 446, 203, 261, 33, 612, 175, 262, 776, 109, 319, 780, 192, 577, 693, 180, 422, 248, 324, 363, 284, 490, 574, 712, 591, 488, 691, 55, 608, 300, 13, 293, 139, 259, 456, 571, 129, 137, 554, 384, 417, 75, 153, 797, 155, 398, 830, 31, 71, 513, 188, 258, 439, 99, 566, 601, 69, 534, 27, 625, 794, 62, 579, 373, 616, 347, 471, 617, 837, 705, 406, 573, 858, 221], [], [], [], [], [], []]

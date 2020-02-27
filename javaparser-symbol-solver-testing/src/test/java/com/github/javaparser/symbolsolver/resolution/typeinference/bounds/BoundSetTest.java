/*
 * Copyright (C) 2015-2016 Federico Tomassetti
 * Copyright (C) 2017-2019 The JavaParser Team.
 *
 * This file is part of JavaParser.
 *
 * JavaParser can be used either under the terms of
 * a) the GNU Lesser General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 * b) the terms of the Apache License
 *
 * You should have received a copy of both licenses in LICENCE.LGPL and
 * LICENCE.APACHE. Please refer to those files for details.
 *
 * JavaParser is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 */

package com.github.javaparser.symbolsolver.resolution.typeinference.bounds;

import com.github.javaparser.utils.Pair;
import com.github.javaparser.ast.type.TypeParameter;
import com.github.javaparser.ast.body.EnumDeclaration;
import com.github.javaparser.resolution.types.ResolvedType;
import com.github.javaparser.symbolsolver.model.resolution.TypeSolver;
import com.github.javaparser.symbolsolver.model.typesystem.ReferenceTypeImpl;
import com.github.javaparser.symbolsolver.resolution.typeinference.Bound;
import com.github.javaparser.symbolsolver.resolution.typeinference.BoundSet;
import com.github.javaparser.symbolsolver.resolution.typeinference.BoundSet.*;
import com.github.javaparser.symbolsolver.resolution.typeinference.ProperUpperBound;
import com.github.javaparser.symbolsolver.resolution.typeinference.InferenceVariable;
import com.github.javaparser.symbolsolver.resolution.typeinference.Instantiation;
import com.github.javaparser.symbolsolver.resolution.typeinference.bounds.FalseBound;
import com.github.javaparser.symbolsolver.resolution.typeinference.bounds.SameAsBound;
import com.github.javaparser.symbolsolver.resolution.typeinference.bounds.SubtypeOfBound;
import com.github.javaparser.symbolsolver.resolution.typeinference.Instantiation;
import com.github.javaparser.symbolsolver.resolution.typesolvers.ReflectionTypeSolver;
import com.github.javaparser.symbolsolver.javaparsermodel.declarations.JavaParserTypeParameter;
import com.github.javaparser.symbolsolver.javaparsermodel.declarations.JavaParserEnumDeclaration;
import com.github.javaparser.resolution.declarations.ResolvedTypeParameterDeclaration;
import com.github.javaparser.resolution.types.ResolvedReferenceType;
import com.github.javaparser.symbolsolver.model.typesystem.ReferenceTypeImpl;
import com.github.javaparser.symbolsolver.reflectionmodel.ReflectionTypeParameter;
import org.junit.jupiter.api.Test;

import java.util.Optional;
import java.util.*;
import java.util.function.Predicate;
import java.lang.reflect.TypeVariable;
import static org.junit.jupiter.api.Assertions.assertEquals;

class BoundSetTest {

    @Test
    public void overridesTest(){
      BoundSet a = new BoundSet();
      BoundSet b = new BoundSet();
      //equals
      assertEquals(true, a.equals(a));
      assertEquals(true, a.equals(b));
      assertEquals(false,a.equals(null));
      assertEquals(false,a.equals(new Integer(0)));
      //hashcode
      assertEquals(1, a.hashCode());
      //toString
      assertEquals("BoundSet{" + "bounds=" + new LinkedList<>() + '}',a.toString());
    }

    @Test
    public void gettersTest(){
      BoundSet a = new BoundSet();
      //isTrue()
      assertEquals(true, a.isTrue());
      //empty
      assertEquals(true, BoundSet.empty().equals(new BoundSet()));
      //isEmpty
      assertEquals(true,a.isEmpty());
    }

    @Test
    public void withBoundTest(){
      BoundSet a = new BoundSet();
      TypeSolver typeSolver = new ReflectionTypeSolver();
      ResolvedType stringType = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      //TODO Increase coverage of InferenceVariable with instantiate()
      // ResolvedTypeParameterDeclaration r =  ResolvedTypeParameterDeclaration
      //                                    .onType("name", "classQName", new LinkedList<Bound>());
      // LinkedList<ResolvedTypeParameterDeclaration> l = new LinkedList<>();
      // l.add(r);
      // List<InferenceVariable> ListInferenceVariable = InferenceVariable.instantiate(l);
      InferenceVariable inferenceVariable1 = new InferenceVariable("1", null);
      InferenceVariable inferenceVariable2 = new InferenceVariable("2", null);
      ProperUpperBound upper1 = new ProperUpperBound(inferenceVariable1,stringType);
      ProperUpperBound upper2 = new ProperUpperBound(inferenceVariable2,stringType);
      assertEquals(true, upper1.equals(upper1));
      assertEquals(false, upper1.equals(null));
      assertEquals(false, upper1.equals(upper2));

      Bound f = FalseBound.getInstance();
       // assertEquals(a, a.withBound(null));
      BoundSet b = new BoundSet();
       b.bounds.add(f);
       assertEquals(b, a.withBound(f));
       assertEquals(b, b.withBound(f));
    }

    //FindPairSameAs search the list bounds of a BoundSet for a pair of SameAsBound that
    //satisfy the predicate condition.
    @Test
    public void findPairSameAs(){
      //Predicate<Pair<SameAsBound, SameAsBound>>
      //Optional<Pair<SameAsBound, SameAsBound>>

      TypeSolver typeSolver = new ReflectionTypeSolver();
      ResolvedType r1 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      ResolvedType r2 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      InferenceVariable inference = new InferenceVariable("1", null);
      BoundSet a = new BoundSet();
      SameAsBound s1 = new SameAsBound(r1,inference);
      SameAsBound s2 = new SameAsBound(inference,r2);
      Pair<SameAsBound, SameAsBound> pair = new Pair<SameAsBound, SameAsBound>(s1, s2);
      Predicate<Pair<SameAsBound, SameAsBound>> condition = i -> true;
      assertEquals(true, condition.test(pair));
      assertEquals(true,a.findPairSameAs(condition).equals(Optional.empty()));
      a.bounds.add(s1);
      a.bounds.add(s2);
      assertEquals(true, a.findPairSameAs(condition).equals(Optional.of(pair)));
    }

    @Test
    public void forEachPairSameAsTest(){
      //Processor<SameAsBound, SameAsBound, T> processor

      TypeSolver typeSolver = new ReflectionTypeSolver();
      ResolvedType r1 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      ResolvedType r2 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      InferenceVariable inference = new InferenceVariable("1", null);
      BoundSet a = new BoundSet();
      SameAsBound s1 = new SameAsBound(r1,inference);
      SameAsBound s2 = new SameAsBound(r1,inference);
      SubtypeOfBound s3 = new SubtypeOfBound(inference,r2);
      a.bounds.add(s1);
      a.bounds.add(s2);
      a.bounds.add(s3);
      assertEquals(0,a.forEachPairSameAs(new ProcessorSameSame(), 0));
    }

    public class ProcessorSameSame implements Processor<SameAsBound, SameAsBound, Integer>{
      public Integer process(SameAsBound s1, SameAsBound s2, Integer i){
        return 0;
      }
    }
    public class ProcessorSameSub implements Processor<SameAsBound, SubtypeOfBound, Integer>{
      public Integer process(SameAsBound s1, SubtypeOfBound s2, Integer i){
        return 0;
      }
    }
    public class ProcessorSubSub implements Processor<SubtypeOfBound, SubtypeOfBound, Integer>{
      public Integer process(SubtypeOfBound s1, SubtypeOfBound s2, Integer i){
        return 0;
      }
    }


    @Test
    public void forEachPairSameAndSubtypeTest(){
      TypeSolver typeSolver = new ReflectionTypeSolver();
      ResolvedType r1 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      ResolvedType r2 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      InferenceVariable inference = new InferenceVariable("1", null);
      BoundSet a = new BoundSet();
      SameAsBound s1 = new SameAsBound(r1,inference);
      SubtypeOfBound s2 = new SubtypeOfBound(inference,r2);
      a.bounds.add(s1);
      a.bounds.add(s2);
      assertEquals(0,a.forEachPairSameAndSubtype(new ProcessorSameSub(), 0));
    }


    @Test
    public void forEachPairSubtypeAndSubtypeTest(){
      TypeSolver typeSolver = new ReflectionTypeSolver();
      ResolvedType r1 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      ResolvedType r2 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      InferenceVariable inference = new InferenceVariable("1", null);
      BoundSet a = new BoundSet();
      SubtypeOfBound s1 = new SubtypeOfBound(r1,inference);
      SubtypeOfBound s2 = new SubtypeOfBound(inference,r2);
      a.bounds.add(s1);
      a.bounds.add(s2);
      assertEquals(0,a.forEachPairSubtypeAndSubtype(new ProcessorSubSub(), 0));
    }

    @Test
    public void areSameTypeInferenceTest(){
      TypeSolver typeSolver = new ReflectionTypeSolver();
      ResolvedType r1 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      ResolvedType r2 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      InferenceVariable inference = new InferenceVariable("1", null);
      BoundSet a = new BoundSet();
      assertEquals(true, a.areSameTypeInference(inference,inference));
    }

    @Test
    public void findPairsOfCommonAncestorsTest(){
      //Returns List<Pair<ResolvedReferenceType, ResolvedReferenceType>>
      TypeSolver typeSolver = new ReflectionTypeSolver();
      TypeParameter type = new TypeParameter();
      //JavaParserTypeParameter declaration = new JavaParserTypeParameter(type, typeSolver);
      JavaParserEnumDeclaration declaration = new JavaParserEnumDeclaration(new EnumDeclaration(),typeSolver);
      ReferenceTypeImpl r = new ReferenceTypeImpl(declaration, typeSolver);
      BoundSet a = new BoundSet();
      List<Pair<ResolvedReferenceType, ResolvedReferenceType>> l = new LinkedList<>();
      List<ResolvedReferenceType> ancestors = r.getAllAncestors();
      for (ResolvedReferenceType i : ancestors) {
        l.add(new Pair(i,i));
      }

      List<Pair<ResolvedReferenceType, ResolvedReferenceType>> effective =  a.findPairsOfCommonAncestors(r,r);
      // for (Pair<ResolvedReferenceType, ResolvedReferenceType> pair: effective) {
      //   assertEquals(false, l.contains(pair));
      // }
    }

    @Test
    public void incorporateTest(){
      BoundSet a = new BoundSet();
      BoundSet b = new BoundSet();
      Bound f = FalseBound.getInstance();
      b.bounds.add(f);
      TypeSolver typeSolver = new ReflectionTypeSolver();
      assertEquals(true,a.incorporate(b,typeSolver).equals(b));
    }

    @Test
    public void deriveImpliedBoundsTest(){
      TypeSolver typeSolver = new ReflectionTypeSolver();
      ResolvedType r1 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      ResolvedType r2 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      InferenceVariable inference = new InferenceVariable("1", null);
      BoundSet a = new BoundSet();
      SameAsBound s1 = new SameAsBound(r1,inference);
      SubtypeOfBound s2 = new SubtypeOfBound(inference,r2);
      a.bounds.add(s1);
      a.bounds.add(s1);
      a.bounds.add(s2);
      a.bounds.add(s2);
      //FIXME throw exception here
      // a.deriveImpliedBounds(typeSolver);
      // a.bounds = new LinkedList<Bound>();
      // assertEquals(true,a.deriveImpliedBounds(typeSolver).equals(a));
    }

    @Test
    public void containsFalseTest(){
      BoundSet a = new BoundSet();
      Bound f = FalseBound.getInstance();
      a.bounds.add(f);
      assertEquals(true,a.containsFalse());
    }

    @Test
    public void variableDependencyTest(){
      BoundSet a = new BoundSet();
      InferenceVariable inference = new InferenceVariable("1", null);
      BoundSet.VariableDependency var = new BoundSet.VariableDependency(inference,inference);
      assertEquals(true, var.getDepending().equals(inference));
      assertEquals(true, var.getDependedOn().equals(inference));
      assertEquals(true, var.isReflexive());

      InferenceVariable i2 = new InferenceVariable("2", null);
      BoundSet.VariableDependency var2 = new BoundSet.VariableDependency(inference,i2);
      assertEquals(false, var2.isReflexive());
    }

    @Test
    public void allInferenceVariablesTest(){
      TypeSolver typeSolver = new ReflectionTypeSolver();
      ResolvedType r1 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      ResolvedType r2 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      InferenceVariable inference = new InferenceVariable("1", null);
      BoundSet a = new BoundSet();
      SameAsBound s1 = new SameAsBound(r1,inference);
      a.bounds.add(s1);
      Set<InferenceVariable> variables = new HashSet<>();
      variables.add(inference);
      assertEquals(true, a.allInferenceVariables().equals(variables));
    }

    @Test
    public void hasInstantiationForTest(){
      TypeSolver typeSolver = new ReflectionTypeSolver();
      ResolvedType r1 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      ResolvedType r2 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      InferenceVariable inference = new InferenceVariable("1", null);
      BoundSet a = new BoundSet();
      SameAsBound s1 = new SameAsBound(r1,inference);
      a.bounds.add(s1);
      assertEquals(true, a.hasInstantiationFor(inference));
    }

    @Test
    public void getInstantiationForTest(){
      TypeSolver typeSolver = new ReflectionTypeSolver();
      ResolvedType r1 = new ReferenceTypeImpl(
                new ReflectionTypeSolver().solveType(String.class.getCanonicalName()), typeSolver);
      InferenceVariable inference = new InferenceVariable("1", null);
      BoundSet a = new BoundSet();
      SameAsBound s1 = new SameAsBound(r1,inference);
      a.bounds.add(s1);
      Instantiation instance = new Instantiation(inference, r1);
      assertEquals(true, a.getInstantiationFor(inference).equals(instance));
    }

    @Test
    public void thereIsSomeJSuchThatβequalAlphaJTest(){
      InferenceVariable inference = new InferenceVariable("1", null);
      BoundSet a = new BoundSet();
      SameAsBound s1 = new SameAsBound(inference,inference);
      SameAsBound s2 = new SameAsBound(inference,inference);
      HashSet<InferenceVariable> set = new HashSet<>();

      assertEquals(false, a.thereIsSomeJSuchThatβequalAlphaJ(set, inference));
      a.bounds.add(s1);
      a.bounds.add(s2);
      set.add(inference);
      assertEquals(true, a.thereIsSomeJSuchThatβequalAlphaJ(set, inference));
    }

    @Test
    public void buildAllSubsetsOfSizeTest(){
      BoundSet a = new BoundSet();
      Set<Integer> all = new HashSet<>(Arrays.asList(1,2,3,4,5));
      List<Set<Integer>> res = new LinkedList<>();
      for (Integer i: all) {
        res.add(new HashSet<>(Arrays.asList(i)));
      }
      List<Set<Integer>>  returned = a.buildAllSubsetsOfSize(all,1);
      assertEquals(true, a.buildAllSubsetsOfSize(all,5).equals(Arrays.asList(all)));
      for (Integer i: all) {
        assertEquals(true, returned.contains(new HashSet<>(Arrays.asList(i))));
      }
    }

}

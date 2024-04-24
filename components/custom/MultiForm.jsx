"use client";

import Image from "next/image";

import empaticImg from "@/assets/empatic.jpg";
import nuEmpaticImg from "@/assets/nu_empatic.jpg";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";

import { useState } from "react";

const questions = [
  "Îmi pasă să înțeleg și să ascult perspectivele diferite.",
  "Sunt dispus să ajut persoanele în dificultate, indiferent de cine sunt.",
  "Mă simt confortabil în preajma oamenilor din culturi sau medii sociale diferite.",
  "Sunt deschis să-mi schimb părerea în urma discuțiilor sincere.",
  "Îmi place să fac parte din grupuri unde toți membrii sunt tratați cu respect și înțelegere.",
  "Sunt interesat să învăț din experiențele și perspectivele altora.",
  "Consider că este important să tratez pe toată lumea cu empatie și respect, indiferent de diferențele lor.",
];

const bine = (
  <div className="space-y-5">
    <span className="lg:text-lg">
      <span className="text-xl font-semibold text-blue-500 sm:text-2xl lg:text-3xl">
        Felicitări
      </span>{" "}
      pentru atitudinea ta <span className="font-semibold">incluzivă</span> și
      pentru <span className="font-semibold">empatia</span> pe care o arăți în
      relația cu cei din jur! Modul în care ești mereu deschis și receptiv la
      nevoile și sentimentele altora este cu adevărat admirabil.{" "}
      <span className="font-semibold">
        Gesturile tale de înțelegere și sprijin fac lumea un loc mai bun
      </span>{" "}
      pentru toți.
    </span>
    <Image
      src={empaticImg}
      alt="Imagine empatie"
      width={828}
      height={850}
      className="mx-auto w-full max-w-sm"
    />
  </div>
);

const rau = (
  <div className="space-y-5">
    <span className="lg:text-lg">
      <span className="text-xl font-semibold text-blue-500 sm:text-2xl lg:text-3xl">
        Drumul către empatie și incluziune este o călătorie continuă
      </span>{" "}
      , iar progresul tău este admirabil. Recunoașterea faptului că mereu există
      loc pentru{" "}
      <span className="font-semibold">a creștere și a te dezvolta</span> este
      semnul unui spirit deschis și dedicat. Continuă să mergi cu încredere pe
      acest drum și să încerci să devii câtuși de puțin mai bun în fiecare zi!
    </span>
    <Image
      src={nuEmpaticImg}
      alt="Imagine fara empatie"
      width={800}
      height={900}
      className="mx-auto w-full max-w-sm"
    />
  </div>
);

export default function MultiForm() {
  const form = useForm({});

  const what = form.watch("question");

  const [step, setStep] = useState(0);
  const [yesAns, setYesAns] = useState(0);

  return (
    <div className="space-y-10">
      <h1 className="text-center text-2xl font-semibold sm:text-3xl lg:text-4xl">
        {step !== 7
          ? "Esti o persoana incluziva?"
          : yesAns >= 4
            ? "Esti o persoana incluziva!"
            : "Mai ai de lucrat..."}
      </h1>
      {step === 7 ? (
        <div>{yesAns >= 4 ? bine : rau}</div>
      ) : (
        <Form {...form}>
          <form className="w-full space-y-6">
            <FormField
              key={questions[step]}
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-xl">{questions[step]}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="text-lg font-normal">
                          Da
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="text-lg font-normal">
                          Nu
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full items-center justify-between">
              <Button
                type="button"
                onClick={() => {
                  setStep(0);
                  setYesAns(0);
                  form.reset();
                }}
                disabled={step === 0}
              >
                Reset
              </Button>
              {step === 6 ? (
                <Button
                  type="button"
                  onClick={() => {
                    setStep((c) => c + 1);
                    if (what === "yes") setYesAns((c) => c + 1);
                    form.reset();
                  }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={() => {
                    setStep((c) => c + 1);
                    if (what === "yes") setYesAns((c) => c + 1);
                    form.reset();
                  }}
                  disabled={what === undefined}
                >
                  Next
                </Button>
              )}
            </div>
          </form>
        </Form>
      )}
      <Progress value={step * 14.285} />
    </div>
  );
}

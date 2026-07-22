"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import {
  colorOptions,
  contactChannelOptions,
  fitOptions,
  interestOptions,
  priceRangeOptions,
  sizeOptions,
  surveyContent,
  surveySteps,
} from "@/data/purchase-turn-survey";
import {
  surveyDefaultValues,
  surveySchema,
  surveyStepFields,
  type SurveyFormValues,
} from "@/lib/schemas";
import { trackEvent } from "@/lib/analytics";
import { FormField } from "@/components/ui/FormField";
import { RadioCard } from "@/components/ui/RadioCard";
import { ConsentCheckbox } from "@/components/ui/ConsentCheckbox";
import { LoadingButton } from "@/components/ui/LoadingButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { VisualSuccessMessage } from "@/components/ui/VisualSuccessMessage";
import { SurveyProgress } from "@/components/survey/SurveyProgress";
import { SurveyStep } from "@/components/survey/SurveyStep";
import { SizeGuideModal } from "@/components/survey/SizeGuideModal";
import { Toast } from "@/components/system/Toast";

export function PurchaseTurnSurvey() {
  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    formState: { errors },
  } = useForm<SurveyFormValues>({
    resolver: zodResolver(surveySchema),
    defaultValues: surveyDefaultValues,
    mode: "onBlur",
  });

  const step = surveySteps[stepIndex];
  const isLastStep = stepIndex === surveySteps.length - 1;
  const values = watch();

  useEffect(() => {
    if (!toastMessage) return;
    const timeout = setTimeout(() => setToastMessage(null), 3200);
    return () => clearTimeout(timeout);
  }, [toastMessage]);

  function handleStart() {
    if (!started) {
      setStarted(true);
      trackEvent("turn_survey_start");
    }
  }

  async function goNext() {
    const valid = await trigger(surveyStepFields[step.id]);
    if (!valid) {
      setToastMessage("Revisa los campos señalados para continuar.");
      return;
    }
    const nextIndex = Math.min(stepIndex + 1, surveySteps.length - 1);
    setStepIndex(nextIndex);
    trackEvent("turn_survey_step", { step: surveySteps[nextIndex].id });
  }

  function goPrev() {
    setStepIndex((current) => Math.max(current - 1, 0));
  }

  async function onSubmit() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
    trackEvent("turn_survey_complete_demo");
  }

  function onInvalid() {
    setToastMessage("Revisa los campos señalados para continuar.");
  }

  function handleFinish() {
    reset(surveyDefaultValues);
    setStepIndex(0);
    setSubmitted(false);
    setStarted(false);
  }

  if (submitted) {
    return (
      <VisualSuccessMessage
        title={surveyContent.successTitle}
        body={surveyContent.successBody}
        actions={
          <>
            <SecondaryButton href="/coleccion/gala-001">
              {surveyContent.backToCollection}
            </SecondaryButton>
            <PrimaryButton onClick={handleFinish}>
              {surveyContent.finishDemo}
            </PrimaryButton>
          </>
        }
      />
    );
  }

  return (
    <div onFocus={handleStart} className="grid gap-10 lg:grid-cols-[280px_1fr]">
      <SurveyProgress currentIndex={stepIndex} />

      <form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        noValidate
        aria-live="polite"
        className="border-asbor-border bg-asbor-black-soft/60 border p-6 sm:p-10"
      >
        <AnimatePresence mode="wait">
          {step.id === "datos" && (
            <SurveyStep key="datos" stepKey="datos">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  id="firstName"
                  label="Nombre"
                  required
                  error={errors.firstName?.message}
                  {...register("firstName")}
                />
                <FormField
                  id="lastName"
                  label="Apellido"
                  required
                  error={errors.lastName?.message}
                  {...register("lastName")}
                />
                <FormField
                  id="whatsapp"
                  label="Número de WhatsApp"
                  type="tel"
                  required
                  error={errors.whatsapp?.message}
                  {...register("whatsapp")}
                />
                <FormField
                  id="city"
                  label="Ciudad"
                  required
                  error={errors.city?.message}
                  {...register("city")}
                />
                <FormField
                  id="department"
                  label="Departamento"
                  required
                  className="sm:col-span-2"
                  error={errors.department?.message}
                  {...register("department")}
                />
              </div>
            </SurveyStep>
          )}

          {step.id === "talla" && (
            <SurveyStep key="talla" stepKey="talla">
              <div className="flex items-center justify-between gap-4">
                <p className="text-asbor-text-muted text-sm">
                  ¿Cuál es tu talla aproximada de jean?
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSizeGuideOpen(true);
                    trackEvent("size_guide_open");
                  }}
                  className="focus-ring label-caps text-asbor-gold shrink-0 underline underline-offset-4"
                >
                  {surveyContent.sizeGuideCta}
                </button>
              </div>
              <div
                role="radiogroup"
                aria-label="Talla aproximada"
                className="grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {sizeOptions.map((option) => (
                  <RadioCard
                    key={option.value}
                    id={`size-${option.value}`}
                    label={option.label}
                    value={option.value}
                    {...register("size")}
                  />
                ))}
              </div>
              {errors.size && (
                <p role="alert" className="text-xs text-red-300">
                  {errors.size.message}
                </p>
              )}
              <SizeGuideModal
                open={sizeGuideOpen}
                onClose={() => setSizeGuideOpen(false)}
              />
            </SurveyStep>
          )}

          {step.id === "preferencias" && (
            <SurveyStep key="preferencias" stepKey="preferencias">
              <fieldset className="flex flex-col gap-4">
                <legend className="text-asbor-text-muted text-sm">
                  ¿Cómo prefieres usar tus jeans?
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {fitOptions.map((option) => (
                    <RadioCard
                      key={option.value}
                      id={`fit-${option.value}`}
                      label={option.label}
                      description={option.description}
                      value={option.value}
                      {...register("fit")}
                    />
                  ))}
                </div>
                {errors.fit && (
                  <p role="alert" className="text-xs text-red-300">
                    {errors.fit.message}
                  </p>
                )}
              </fieldset>

              <fieldset className="flex flex-col gap-4">
                <legend className="text-asbor-text-muted text-sm">
                  ¿Qué tono te interesaría para GALA 001?
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {colorOptions.map((option) => (
                    <RadioCard
                      key={option.value}
                      id={`color-${option.value}`}
                      label={option.label}
                      value={option.value}
                      {...register("color")}
                    />
                  ))}
                </div>
                {errors.color && (
                  <p role="alert" className="text-xs text-red-300">
                    {errors.color.message}
                  </p>
                )}
              </fieldset>
            </SurveyStep>
          )}

          {step.id === "interes" && (
            <SurveyStep key="interes" stepKey="interes">
              <fieldset className="flex flex-col gap-4">
                <legend className="text-asbor-text-muted text-sm">
                  ¿Qué tan interesado estás en adquirir GALA 001?
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {interestOptions.map((option) => (
                    <RadioCard
                      key={option.value}
                      id={`interest-${option.value}`}
                      label={option.label}
                      value={option.value}
                      {...register("interest")}
                    />
                  ))}
                </div>
                {errors.interest && (
                  <p role="alert" className="text-xs text-red-300">
                    {errors.interest.message}
                  </p>
                )}
              </fieldset>

              <fieldset className="flex flex-col gap-4">
                <legend className="text-asbor-text-muted text-sm">
                  ¿Dentro de qué rango considerarías comprar el jean?
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {priceRangeOptions.map((option) => (
                    <RadioCard
                      key={option.value}
                      id={`price-${option.value}`}
                      label={option.label}
                      value={option.value}
                      {...register("priceRange")}
                    />
                  ))}
                </div>
                {errors.priceRange && (
                  <p role="alert" className="text-xs text-red-300">
                    {errors.priceRange.message}
                  </p>
                )}
              </fieldset>

              <fieldset className="flex flex-col gap-4">
                <legend className="text-asbor-text-muted text-sm">
                  ¿Cómo preferirías recibir información?
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {contactChannelOptions.map((option) => (
                    <RadioCard
                      key={option.value}
                      id={`contact-${option.value}`}
                      label={option.label}
                      value={option.value}
                      {...register("contactChannel")}
                    />
                  ))}
                </div>
                {errors.contactChannel && (
                  <p role="alert" className="text-xs text-red-300">
                    {errors.contactChannel.message}
                  </p>
                )}
              </fieldset>

              <FormField
                id="comment"
                as="textarea"
                label="¿Qué esperas encontrar en un jean ASBOR? (opcional)"
                placeholder={surveyContent.commentPlaceholder}
                error={errors.comment?.message}
                {...register("comment")}
              />
            </SurveyStep>
          )}

          {step.id === "confirmacion" && (
            <SurveyStep key="confirmacion" stepKey="confirmacion">
              <div className="border-asbor-border/70 space-y-3 border p-5">
                <p className="label-caps text-asbor-gold-muted">
                  Resumen de tu demostración
                </p>
                <dl className="text-asbor-text-muted grid gap-2 text-sm sm:grid-cols-2">
                  <SummaryRow
                    label="Nombre"
                    value={`${values.firstName} ${values.lastName}`.trim()}
                  />
                  <SummaryRow
                    label="Ciudad"
                    value={[values.city, values.department].filter(Boolean).join(", ")}
                  />
                  <SummaryRow label="Talla" value={values.size} />
                  <SummaryRow
                    label="Fit"
                    value={fitOptions.find((o) => o.value === values.fit)?.label}
                  />
                  <SummaryRow
                    label="Color"
                    value={colorOptions.find((o) => o.value === values.color)?.label}
                  />
                  <SummaryRow
                    label="Canal"
                    value={
                      contactChannelOptions.find((o) => o.value === values.contactChannel)
                        ?.label
                    }
                  />
                </dl>
              </div>

              <ConsentCheckbox
                id="consentRequired"
                label={surveyContent.consentRequired}
                error={errors.consentRequired?.message}
                {...register("consentRequired")}
              />
              <ConsentCheckbox
                id="consentOptional"
                label={surveyContent.consentOptional}
                {...register("consentOptional")}
              />
            </SurveyStep>
          )}
        </AnimatePresence>

        <div className="border-asbor-border mt-10 flex flex-col-reverse gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {stepIndex > 0 && (
              <SecondaryButton type="button" onClick={goPrev}>
                Anterior
              </SecondaryButton>
            )}
          </div>
          {isLastStep ? (
            <LoadingButton loading={loading} loadingLabel={surveyContent.loadingLabel}>
              {surveyContent.submitLabel}
            </LoadingButton>
          ) : (
            <PrimaryButton type="button" onClick={goNext}>
              Continuar
            </PrimaryButton>
          )}
        </div>
      </form>

      <Toast message={toastMessage} tone="error" />
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="border-asbor-border/40 flex items-center justify-between gap-3 border-b py-1.5">
      <dt className="text-asbor-text-muted/70 text-xs tracking-wide uppercase">
        {label}
      </dt>
      <dd className="text-asbor-ivory">{value || "—"}</dd>
    </div>
  );
}

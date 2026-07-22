"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { laboratorioContent, suggestionCategories } from "@/data/laboratorio";
import {
  suggestionDefaultValues,
  suggestionSchema,
  type SuggestionFormValues,
} from "@/lib/schemas";
import { trackEvent } from "@/lib/analytics";
import { FormField } from "@/components/ui/FormField";
import { RadioCard } from "@/components/ui/RadioCard";
import { ConsentCheckbox } from "@/components/ui/ConsentCheckbox";
import { LoadingButton } from "@/components/ui/LoadingButton";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { VisualSuccessMessage } from "@/components/ui/VisualSuccessMessage";
import { Toast } from "@/components/system/Toast";

export function SuggestionForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SuggestionFormValues>({
    resolver: zodResolver(suggestionSchema),
    defaultValues: suggestionDefaultValues,
    mode: "onBlur",
  });

  function handleStart() {
    if (!started) {
      setStarted(true);
      trackEvent("suggestion_form_start");
    }
  }

  async function onSubmit() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
    trackEvent("suggestion_form_complete_demo");
  }

  function onInvalid() {
    setToastMessage("Revisa los campos señalados para continuar.");
    setTimeout(() => setToastMessage(null), 3200);
  }

  function handleFinish() {
    reset(suggestionDefaultValues);
    setSubmitted(false);
    setStarted(false);
  }

  if (submitted) {
    return (
      <VisualSuccessMessage
        title={laboratorioContent.successTitle}
        body={laboratorioContent.successBody}
        actions={
          <PrimaryButton onClick={handleFinish}>
            {laboratorioContent.finishDemo}
          </PrimaryButton>
        }
      />
    );
  }

  return (
    <form
      onFocus={handleStart}
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      noValidate
      className="border-asbor-border bg-asbor-black-soft/60 flex flex-col gap-6 border p-6 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="firstName"
          label="Nombre"
          required
          error={errors.firstName?.message}
          {...register("firstName")}
        />
        <FormField id="lastName" label="Apellido (opcional)" {...register("lastName")} />
      </div>

      <fieldset className="flex flex-col gap-4">
        <legend className="label-caps text-asbor-silver">
          Categoría <span className="text-asbor-gold">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {suggestionCategories.map((category) => (
            <RadioCard
              key={category.value}
              id={`category-${category.value}`}
              label={category.label}
              value={category.value}
              {...register("category")}
            />
          ))}
        </div>
        {errors.category && (
          <p role="alert" className="text-xs text-red-300">
            {errors.category.message}
          </p>
        )}
      </fieldset>

      <FormField
        id="suggestion"
        as="textarea"
        label="Tu sugerencia"
        required
        placeholder="Cuéntanos tu idea para una próxima colección de ASBOR."
        error={errors.suggestion?.message}
        {...register("suggestion")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="whatsapp"
          label="WhatsApp (opcional)"
          type="tel"
          {...register("whatsapp")}
        />
        <FormField
          id="email"
          label="Correo (opcional)"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <ConsentCheckbox
        id="consent"
        label={laboratorioContent.consentRequired}
        error={errors.consent?.message}
        {...register("consent")}
      />

      <LoadingButton loading={loading} loadingLabel={laboratorioContent.loadingLabel}>
        {laboratorioContent.submitLabel}
      </LoadingButton>

      <Toast message={toastMessage} tone="error" />
    </form>
  );
}

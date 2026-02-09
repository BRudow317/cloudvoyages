import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

type ConsultationDialogContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openDialog: () => void;
};

const ConsultationDialogContext = createContext<ConsultationDialogContextValue | null>(
  null,
);

export function ConsultationDialogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openDialog = useCallback(() => {
    setOpen(true);
  }, []);

  const value = useMemo(
    () => ({
      open,
      setOpen,
      openDialog,
    }),
    [open, openDialog],
  );

  return (
    <ConsultationDialogContext.Provider value={value}>
      {children}
    </ConsultationDialogContext.Provider>
  );
}

export function useConsultationDialog() {
  const context = useContext(ConsultationDialogContext);
  if (!context) {
    throw new Error('useConsultationDialog must be used within a ConsultationDialogProvider.');
  }
  return context;
}

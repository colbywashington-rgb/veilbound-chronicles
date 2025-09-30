-- Fix security warning by setting search_path on the function
CREATE OR REPLACE FUNCTION public.update_merch_updated_at()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;
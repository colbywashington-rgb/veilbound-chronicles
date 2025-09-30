-- Create merch_products table
CREATE TABLE public.merch_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT NOT NULL,
  product_type TEXT NOT NULL DEFAULT 'tshirt',
  colors TEXT[] NOT NULL DEFAULT ARRAY['Black'],
  sizes TEXT[] NOT NULL DEFAULT ARRAY['S', 'M', 'L', 'XL', '2XL'],
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.merch_products ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view active products
CREATE POLICY "Anyone can view active merch products"
ON public.merch_products
FOR SELECT
USING (is_active = true);

-- Only authenticated users can insert/update/delete (for admin)
CREATE POLICY "Authenticated users can manage merch products"
ON public.merch_products
FOR ALL
USING (auth.uid() IS NOT NULL)
WITH CHECK (auth.uid() IS NOT NULL);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_merch_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_merch_products_updated_at
BEFORE UPDATE ON public.merch_products
FOR EACH ROW
EXECUTE FUNCTION public.update_merch_updated_at();

-- Insert existing t-shirt products
INSERT INTO public.merch_products (name, description, price, image_url, colors, sizes) VALUES
('Veilbound Logo T-Shirt', 'Premium quality cotton t-shirt featuring the iconic Veilbound logo.', 29.99, '/src/assets/merch-logo-tshirt.jpg', ARRAY['Black', 'Navy', 'Charcoal', 'White'], ARRAY['S', 'M', 'L', 'XL', '2XL']),
('Veil Diver Character Tee', 'Show your love for the game with this exclusive character design t-shirt.', 32.99, '/src/assets/merch-diver-tshirt.jpg', ARRAY['Black', 'Navy', 'Dark Green'], ARRAY['S', 'M', 'L', 'XL', '2XL']),
('Dyson Ring Explorer Shirt', 'Explore the mysteries in style with this premium explorer-themed shirt.', 34.99, '/src/assets/merch-dyson-tshirt.jpg', ARRAY['Black', 'Slate Gray', 'Deep Blue'], ARRAY['S', 'M', 'L', 'XL', '2XL']);
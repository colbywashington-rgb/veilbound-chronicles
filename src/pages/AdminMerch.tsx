import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { Plus, Pencil, Trash2, Save, X, ShirtIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import VeilboundNavigation from '@/components/VeilboundNavigation';
import VeilboundFooter from '@/components/VeilboundFooter';

interface MerchProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  colors: string[];
  sizes: string[];
  is_active: boolean;
}

const AdminMerch = () => {
  const [products, setProducts] = useState<MerchProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
    colors: '',
    sizes: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('merch_products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: 'Error',
        description: 'Failed to load products',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      image_url: '',
      colors: '',
      sizes: '',
    });
    setEditingId(null);
    setIsCreating(false);
  };

  const handleEdit = (product: MerchProduct) => {
    setEditingId(product.id);
    setIsCreating(false);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      image_url: product.image_url,
      colors: product.colors.join(', '),
      sizes: product.sizes.join(', '),
    });
  };

  const handleSave = async () => {
    try {
      const productData = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        image_url: formData.image_url,
        colors: formData.colors.split(',').map(c => c.trim()),
        sizes: formData.sizes.split(',').map(s => s.trim()),
      };

      if (isCreating) {
        const { error } = await supabase
          .from('merch_products')
          .insert([productData]);

        if (error) throw error;
        toast({
          title: 'Success',
          description: 'Product created successfully',
        });
      } else if (editingId) {
        const { error } = await supabase
          .from('merch_products')
          .update(productData)
          .eq('id', editingId);

        if (error) throw error;
        toast({
          title: 'Success',
          description: 'Product updated successfully',
        });
      }

      resetForm();
      fetchProducts();
    } catch (error) {
      console.error('Error saving product:', error);
      toast({
        title: 'Error',
        description: 'Failed to save product',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const { error } = await supabase
        .from('merch_products')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({
        title: 'Success',
        description: 'Product deleted successfully',
      });
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete product',
        variant: 'destructive',
      });
    }
  };

  const toggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('merch_products')
        .update({ is_active: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      toast({
        title: 'Success',
        description: `Product ${!currentStatus ? 'activated' : 'deactivated'}`,
      });
      fetchProducts();
    } catch (error) {
      console.error('Error toggling product status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update product status',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <VeilboundNavigation />
      <main className="pt-16">
        <section className="py-24 section-space">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                <ShirtIcon className="w-3 h-3 mr-1" />
                Admin Panel
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
                Manage Merchandise
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Add, edit, or remove t-shirts from your store
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
              {/* Create New Product Button */}
              {!isCreating && !editingId && (
                <Button
                  onClick={() => setIsCreating(true)}
                  className="btn-veilbound"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Product
                </Button>
              )}

              {/* Create/Edit Form */}
              {(isCreating || editingId) && (
                <Card className="card-neural">
                  <CardHeader>
                    <CardTitle>
                      {isCreating ? 'Create New Product' : 'Edit Product'}
                    </CardTitle>
                    <CardDescription>
                      Fill in the product details below
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="name">Product Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Veilbound Logo T-Shirt"
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                        placeholder="Premium quality cotton t-shirt..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="price">Price ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) =>
                          setFormData({ ...formData, price: e.target.value })
                        }
                        placeholder="29.99"
                      />
                    </div>
                    <div>
                      <Label htmlFor="image_url">Image URL</Label>
                      <Input
                        id="image_url"
                        value={formData.image_url}
                        onChange={(e) =>
                          setFormData({ ...formData, image_url: e.target.value })
                        }
                        placeholder="/src/assets/merch-logo-tshirt.jpg"
                      />
                    </div>
                    <div>
                      <Label htmlFor="colors">Colors (comma-separated)</Label>
                      <Input
                        id="colors"
                        value={formData.colors}
                        onChange={(e) =>
                          setFormData({ ...formData, colors: e.target.value })
                        }
                        placeholder="Black, Navy, White"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sizes">Sizes (comma-separated)</Label>
                      <Input
                        id="sizes"
                        value={formData.sizes}
                        onChange={(e) =>
                          setFormData({ ...formData, sizes: e.target.value })
                        }
                        placeholder="S, M, L, XL, 2XL"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button onClick={handleSave} className="btn-veilbound">
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button onClick={resetForm} variant="outline">
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {/* Products List */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Current Products</h2>
                {loading ? (
                  <p className="text-muted-foreground">Loading products...</p>
                ) : products.length === 0 ? (
                  <p className="text-muted-foreground">No products yet</p>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <Card key={product.id} className="card-neural">
                        <CardHeader>
                          <div className="relative mb-4">
                            <img
                              src={product.image_url}
                              alt={product.name}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <Badge
                              className={`absolute top-2 right-2 ${
                                product.is_active
                                  ? 'bg-green-500'
                                  : 'bg-gray-500'
                              }`}
                            >
                              {product.is_active ? 'Active' : 'Inactive'}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription className="text-2xl font-bold text-primary">
                            ${product.price}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-2">
                            {product.description}
                          </p>
                          <div className="text-xs space-y-1">
                            <p>
                              <strong>Colors:</strong> {product.colors.join(', ')}
                            </p>
                            <p>
                              <strong>Sizes:</strong> {product.sizes.join(', ')}
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button
                            onClick={() => handleEdit(product)}
                            variant="outline"
                            size="sm"
                          >
                            <Pencil className="w-3 h-3 mr-1" />
                            Edit
                          </Button>
                          <Button
                            onClick={() =>
                              toggleActive(product.id, product.is_active)
                            }
                            variant="outline"
                            size="sm"
                          >
                            {product.is_active ? 'Deactivate' : 'Activate'}
                          </Button>
                          <Button
                            onClick={() => handleDelete(product.id)}
                            variant="destructive"
                            size="sm"
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                            Delete
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <VeilboundFooter />
    </div>
  );
};

export default AdminMerch;

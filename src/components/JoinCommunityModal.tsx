import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send, UserPlus } from 'lucide-react';

interface JoinCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinCommunityModal = ({ isOpen, onClose }: JoinCommunityModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: '',
    interests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Welcome to the Community!",
        description: `Thanks ${formData.name || 'explorer'}! We'll be in touch soon.`,
      });
      
      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        contactMethod: '',
        interests: '',
        message: ''
      });
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <div className="p-2 rounded-lg bg-primary/20 mr-3">
              <UserPlus className="w-6 h-6 text-primary" />
            </div>
            Join Our Community
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="modal-name" className="text-sm font-medium">
                Name *
              </Label>
              <Input
                id="modal-name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="modal-email" className="text-sm font-medium">
                Email *
              </Label>
              <Input
                id="modal-email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="modal-phone" className="text-sm font-medium">
                Phone Number (Optional)
              </Label>
              <Input
                id="modal-phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="modal-contactMethod" className="text-sm font-medium">
                Preferred Contact Method
              </Label>
              <Select onValueChange={(value) => handleInputChange('contactMethod', value)}>
                <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                  <SelectValue placeholder="Select contact method" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="discord">Discord</SelectItem>
                  <SelectItem value="newsletter">Newsletter Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="modal-interests" className="text-sm font-medium">
              What interests you most about Veilbound?
            </Label>
            <Select onValueChange={(value) => handleInputChange('interests', value)}>
              <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                <SelectValue placeholder="Select your primary interest" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border z-50">
                <SelectItem value="alpha-testing">Alpha Testing</SelectItem>
                <SelectItem value="development-updates">Development Updates</SelectItem>
                <SelectItem value="community-events">Community Events</SelectItem>
                <SelectItem value="lore-worldbuilding">Lore & Worldbuilding</SelectItem>
                <SelectItem value="gameplay-mechanics">Gameplay Mechanics</SelectItem>
                <SelectItem value="early-access">Early Access</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="modal-message" className="text-sm font-medium">
              Additional Message (Optional)
            </Label>
            <Textarea
              id="modal-message"
              placeholder="Tell us what excites you most about Veilbound, or ask any questions..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={4}
              className="bg-background/50 border-border/50 focus:border-primary resize-none"
            />
          </div>
          
          <div className="flex justify-end space-x-4 pt-4">
            <Button 
              type="button" 
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting || !formData.name || !formData.email}
              className="btn-veilbound hover-scale min-w-32"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Joining...
                </div>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Join Community
                </>
              )}
            </Button>
          </div>
        </form>
        
        <div className="mt-6 pt-6 border-t border-border/30">
          <p className="text-xs text-muted-foreground text-center">
            By joining, you agree to receive updates about Veilbound. You can unsubscribe at any time.
            <br />
            <span className="text-primary">This is a demo form - no real data is collected.</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinCommunityModal;
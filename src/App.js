import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Neon Hoodie', mood: 'chill', price: '$49', image: '/hoodie.png' },
  { id: 2, name: 'Hype Sneakers', mood: 'hype', price: '$89', image: '/sneakers.png' },
  { id: 3, name: 'Zen Joggers', mood: 'calm', price: '$39', image: '/joggers.png' },
];

export default function FuturisticShop() {
  const [mood, setMood] = useState('');
  const [aiMessage, setAiMessage] = useState('Ask me what fits your vibe!');

  const filteredProducts = mood
    ? products.filter((p) => p.mood === mood.toLowerCase())
    : products;

  const handleMoodInput = (e) => setMood(e.target.value);

  const handleAIAsk = () => {
    if (mood.toLowerCase() === 'hype') {
      setAiMessage("🔥 Let's get you some fire sneakers and bold fits!");
    } else if (mood.toLowerCase() === 'chill') {
      setAiMessage('🌙 Cozy vibes? I recommend our hoodies and soft joggers.');
    } else if (mood.toLowerCase() === 'calm') {
      setAiMessage('🧘 Zen mode on. Try soft pastels and breathable fabric.');
    } else {
      setAiMessage('🤖 Hmm, try moods like hype, chill, or calm.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">NEXTGEN SHOP 🛍️</h1>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
        <Input
          placeholder="Enter your mood (e.g. hype, chill, calm)"
          value={mood}
          onChange={handleMoodInput}
          className="w-full md:w-96"
        />
        <Button onClick={handleAIAsk} className="flex items-center gap-2">
          <Sparkles size={16} /> AI Suggest
        </Button>
      </div>

      <p className="text-center italic text-sm mb-8">{aiMessage}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-800 rounded-2xl p-4 shadow-xl"
          >
            <Card>
              <CardContent className="flex flex-col items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-contain drop-shadow-xl"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-lg text-emerald-400">{product.price}</p>
                <Button>Add to Cart</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

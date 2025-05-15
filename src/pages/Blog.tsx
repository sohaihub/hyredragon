
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Search, 
  ArrowRight, 
  Calendar, 
  User, 
  Tag,
  MessageCircle,
  Share2,
  ThumbsUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/components/ui/use-toast';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageSrc: string;
  category: string;
  author: string;
  date: string;
  commentCount: number;
  likes: number;
}

interface CategoryChipProps {
  name: string;
  active?: boolean;
  onClick?: () => void;
}

const CategoryChip: React.FC<CategoryChipProps> = ({ name, active, onClick }) => (
  <button 
    className={`px-4 py-2 rounded-full text-sm transition-all ${
      active 
        ? 'bg-[#E2FF55] text-[#0A0A29] font-medium' 
        : 'bg-[#0F103E]/50 text-gray-200 hover:bg-[#0F103E]'
    }`}
    onClick={onClick}
  >
    {name}
  </button>
);

const BlogCard: React.FC<BlogPost> = ({ title, excerpt, imageSrc, category, author, date, commentCount, likes }) => (
  <div className="bg-[#080822]/80 border border-gray-800 rounded-xl overflow-hidden transform hover:translate-y-[-5px] transition-all duration-300 h-full flex flex-col">
    <div className="relative">
      <img 
        src={imageSrc} 
        alt={title}
        className="w-full h-52 object-cover"
      />
      <span className="absolute top-4 left-4 bg-[#E2FF55] text-[#0A0A29] px-3 py-1 text-xs font-bold rounded-full">
        {category}
      </span>
    </div>
    
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{title}</h3>
      <p className="text-gray-300 mb-4 line-clamp-3">{excerpt}</p>
      
      <div className="mt-auto">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center text-gray-400 text-sm">
              <ThumbsUp className="w-4 h-4 mr-1" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <MessageCircle className="w-4 h-4 mr-1" />
              <span>{commentCount}</span>
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="text-[#E2FF55]">
            Read More <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const BlogPostForm: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Post Created!",
      description: "Your blog post has been published successfully.",
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input 
          placeholder="Blog Post Title" 
          className="text-xl bg-[#0F103E]/50 border-[#7B78FF]/30 text-white"
        />
      </div>
      
      <div className="flex gap-4 flex-wrap">
        <Input
          placeholder="Category"
          className="w-full sm:w-auto sm:flex-1 bg-[#0F103E]/50 border-[#7B78FF]/30 text-white"
        />
        <Input
          placeholder="Tags (separated by commas)"
          className="w-full sm:w-auto sm:flex-1 bg-[#0F103E]/50 border-[#7B78FF]/30 text-white"
        />
      </div>
      
      <div>
        <Input 
          placeholder="Featured Image URL" 
          className="bg-[#0F103E]/50 border-[#7B78FF]/30 text-white"
        />
      </div>
      
      <div>
        <Textarea 
          placeholder="Write your blog post content here..." 
          className="min-h-[300px] bg-[#0F103E]/50 border-[#7B78FF]/30 text-white"
        />
      </div>
      
      <div className="flex justify-end">
        <Button type="submit" className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90">
          Publish Post
        </Button>
      </div>
    </form>
  );
};

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Ways AI is Transforming the Recruitment Landscape",
      excerpt: "Discover how artificial intelligence is revolutionizing how companies find, screen, and hire candidates in the modern recruitment ecosystem.",
      imageSrc: "https://images.unsplash.com/photo-1558137623-ce933996c730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "AI",
      author: "Aisha Johnson",
      date: "May 12, 2025",
      commentCount: 27,
      likes: 85
    },
    {
      id: 2,
      title: "Remote Hiring: Challenges and Solutions for the Post-Pandemic Era",
      excerpt: "The shift to remote work has transformed hiring practices. Learn about the new challenges recruiters face and innovative solutions to overcome them.",
      imageSrc: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Trends",
      author: "Michael Chen",
      date: "May 8, 2025",
      commentCount: 14,
      likes: 56
    },
    {
      id: 3,
      title: "Building Diverse Teams: How AI Can Reduce Bias in Hiring",
      excerpt: "Unconscious bias remains a significant challenge in recruitment. Explore how AI-powered tools can help companies build more diverse and inclusive teams.",
      imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Diversity",
      author: "Sarah Washington",
      date: "May 5, 2025",
      commentCount: 32,
      likes: 98
    },
    {
      id: 4,
      title: "The Rise of Skills-Based Hiring: Looking Beyond the Resume",
      excerpt: "Traditional resumes may not tell the full story about a candidate's capabilities. See how forward-thinking companies are shifting to skills-based assessment.",
      imageSrc: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Strategy",
      author: "James Wilson",
      date: "Apr 28, 2025",
      commentCount: 9,
      likes: 42
    },
    {
      id: 5,
      title: "Psychometric Testing in Modern Recruitment: Benefits and Limitations",
      excerpt: "As psychometric assessments become increasingly common in recruitment, understanding their value and limitations is crucial for hiring managers.",
      imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Assessment",
      author: "Emma Rodriguez",
      date: "Apr 22, 2025",
      commentCount: 17,
      likes: 63
    },
    {
      id: 6,
      title: "The Future of Technical Interviews: Beyond Whiteboard Coding",
      excerpt: "Technical interviews are evolving. Learn about modern approaches that better evaluate real-world skills and reduce candidate stress.",
      imageSrc: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Tech",
      author: "David Kumar",
      date: "Apr 15, 2025",
      commentCount: 21,
      likes: 47
    },
  ];
  
  const categories = ['All', 'AI', 'Trends', 'Diversity', 'Strategy', 'Assessment', 'Tech'];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29] neon-cursor">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-[#7B78FF]/10 blur-3xl"></div>
      </div>
      
      <Header />
      
      <main className="flex-grow relative z-10 pt-24">
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                HyreDragon <span className="text-[#E2FF55]">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Insights, trends and best practices for modern recruitment and hiring
              </p>
            </div>
            
            <Tabs defaultValue="read" className="w-full">
              <TabsList className="w-full mb-8 bg-[#0F103E]/70">
                <TabsTrigger value="read" className="text-base flex-1">Read Articles</TabsTrigger>
                <TabsTrigger value="write" className="text-base flex-1">Write a Post</TabsTrigger>
              </TabsList>
              
              <TabsContent value="read" className="animate-fade-in">
                {/* Search and filter */}
                <div className="flex justify-between items-center mb-8 flex-col sm:flex-row gap-4">
                  <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                    <Input
                      placeholder="Search articles..."
                      className="pl-10 bg-[#0F103E]/50 border-[#7B78FF]/30 text-white"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                  
                  <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
                    {categories.map(category => (
                      <CategoryChip
                        key={category}
                        name={category}
                        active={activeCategory === category}
                        onClick={() => setActiveCategory(category)}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Blog posts grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {blogPosts
                    .filter(post => activeCategory === 'All' || post.category === activeCategory)
                    .map(post => (
                      <BlogCard key={post.id} {...post} />
                    ))
                  }
                </div>
                
                {/* Load more */}
                <div className="text-center">
                  <Button variant="outline" className="border-[#7B78FF] text-[#7B78FF]">
                    Load More Articles
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="write" className="animate-fade-in">
                <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Create a New Blog Post</h2>
                  <BlogPostForm />
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Featured post */}
            <div className="mt-16 pt-16 border-t border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-8">
                Featured <span className="text-[#E2FF55]">Article</span>
              </h2>
              
              <div className="bg-[#080822]/80 border border-gray-800 rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2">
                    <img
                      src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="AI in recruitment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8 lg:col-span-3">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#E2FF55] text-[#0A0A29] px-3 py-1 text-xs font-bold rounded-full">
                        Featured
                      </span>
                      <span className="bg-[#7B78FF] text-white px-3 py-1 text-xs font-bold rounded-full">
                        AI
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      How Generative AI is Revolutionizing Candidate Screening and Selection
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      The latest advancements in generative AI are transforming how recruitment teams evaluate candidates. From automated initial screening to deeper skills analysis, these tools are helping companies make better hiring decisions while saving valuable time and resources.
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>Dr. Rajiv Patel</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>May 15, 2025</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm" className="text-gray-400">
                          <ThumbsUp className="mr-1 w-4 h-4" /> 124
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400">
                          <MessageCircle className="mr-1 w-4 h-4" /> 43
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400">
                          <Share2 className="mr-1 w-4 h-4" /> Share
                        </Button>
                      </div>
                      
                      <Button className="bg-[#7B78FF] text-white hover:bg-[#7B78FF]/90">
                        Read Full Article <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-16 bg-gradient-to-r from-[#0F103E] to-[#080822] rounded-xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-gray-300">
                    Get the latest recruitment insights and tips delivered to your inbox
                  </p>
                </div>
                
                <div className="w-full md:w-auto flex gap-2">
                  <Input 
                    placeholder="Your email" 
                    className="bg-[#080822]/80 border-[#7B78FF]/30 text-white w-full"
                  />
                  <Button className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;

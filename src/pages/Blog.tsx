
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowRight, Save, FileText, Image, Send, Calendar } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  author: string;
  date: string;
  status: 'draft' | 'published';
}

const Blog: React.FC = () => {
  const [activeTab, setActiveTab] = useState('write');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: 'The Future of AI in Recruitment',
      excerpt: 'Explore how artificial intelligence is transforming hiring processes...',
      content: 'AI is revolutionizing the recruitment industry by automating repetitive tasks and providing deeper insights into candidate qualifications. This allows recruiters to focus on the human aspects of hiring while leveraging technology to improve efficiency and outcomes.',
      author: 'Jane Smith',
      date: '2025-05-10',
      status: 'published'
    },
    {
      id: 2,
      title: 'Reducing Bias in Hiring with Technology',
      excerpt: 'Learn how modern tech solutions are helping companies build more diverse teams...',
      content: 'Unconscious bias remains one of the biggest challenges in recruitment. New AI-powered platforms are helping to mitigate these biases by focusing on candidate skills and qualifications rather than demographic information.',
      author: 'Alex Johnson',
      date: '2025-05-05',
      status: 'published'
    },
  ]);

  const handleSaveDraft = () => {
    if (!title || !content) {
      toast({
        title: "Missing information",
        description: "Please enter a title and content for your blog post.",
        variant: "destructive"
      });
      return;
    }

    const newPost: BlogPost = {
      id: Date.now(),
      title,
      excerpt: content.substring(0, 100) + '...',
      content,
      imageUrl: imageUrl || undefined,
      author: 'Admin User', // Would come from auth context in real app
      date: new Date().toISOString().split('T')[0],
      status: 'draft'
    };

    setBlogPosts([...blogPosts, newPost]);
    toast({
      title: "Draft saved",
      description: "Your blog post draft has been saved.",
    });

    // Reset form for new post
    setTitle('');
    setContent('');
    setImageUrl('');
  };

  const handlePublish = () => {
    if (!title || !content) {
      toast({
        title: "Missing information",
        description: "Please enter a title and content for your blog post.",
        variant: "destructive"
      });
      return;
    }

    const newPost: BlogPost = {
      id: Date.now(),
      title,
      excerpt: content.substring(0, 100) + '...',
      content,
      imageUrl: imageUrl || undefined,
      author: 'Admin User', // Would come from auth context in real app
      date: new Date().toISOString().split('T')[0],
      status: 'published'
    };

    setBlogPosts([...blogPosts, newPost]);
    toast({
      title: "Post published",
      description: "Your blog post has been published successfully.",
    });

    // Reset form for new post
    setTitle('');
    setContent('');
    setImageUrl('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
      </div>
      
      <Header />
      
      <main className="flex-grow relative z-10 pt-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Blog Management</h1>
          
          <Tabs defaultValue="write" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="write" className="text-lg">Write New Post</TabsTrigger>
              <TabsTrigger value="manage" className="text-lg">Manage Posts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="write" className="mt-4">
              <div className="bg-[#080822]/70 border border-gray-800 rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Create New Blog Post</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-white mb-2">Title</label>
                    <Input 
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter post title"
                      className="bg-[#0F103E] border-gray-700 text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="imageUrl" className="block text-white mb-2">Featured Image URL (Optional)</label>
                    <Input 
                      id="imageUrl"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Enter image URL"
                      className="bg-[#0F103E] border-gray-700 text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="content" className="block text-white mb-2">Content</label>
                    <textarea 
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Write your blog post content here..."
                      rows={10}
                      className="w-full rounded-md bg-[#0F103E] border border-gray-700 p-3 text-white resize-y"
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-4">
                    <Button 
                      variant="outline" 
                      onClick={handleSaveDraft}
                      className="border-white text-white hover:bg-white/10"
                    >
                      <Save className="mr-2 h-4 w-4" /> Save as Draft
                    </Button>
                    <Button 
                      onClick={handlePublish}
                      className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90"
                    >
                      <Send className="mr-2 h-4 w-4" /> Publish
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="manage" className="mt-4">
              <div className="bg-[#080822]/70 border border-gray-800 rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Manage Blog Posts</h2>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-white">All Posts</h3>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-white text-white hover:bg-white/10"
                      >
                        All
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-[#7B78FF] text-[#7B78FF] hover:bg-[#7B78FF]/10"
                      >
                        Published
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-gray-500 text-gray-500 hover:bg-gray-500/10"
                      >
                        Drafts
                      </Button>
                    </div>
                  </div>
                  
                  <ScrollArea className="h-[500px] rounded-md border border-gray-800">
                    <div className="p-4 space-y-4">
                      {blogPosts.map(post => (
                        <div 
                          key={post.id} 
                          className="border border-gray-800 rounded-lg p-4 hover:border-[#E2FF55]/50 transition-all"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-medium text-white">{post.title}</h4>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              post.status === 'published' ? 'bg-[#E2FF55]/20 text-[#E2FF55]' : 'bg-gray-700/30 text-gray-400'
                            }`}>
                              {post.status}
                            </span>
                          </div>
                          <p className="text-gray-400 mb-3">{post.excerpt}</p>
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4" />
                              {post.date}
                            </div>
                            <div className="space-x-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="text-[#7B78FF] hover:bg-[#7B78FF]/10 hover:text-[#7B78FF]"
                              >
                                <FileText className="h-4 w-4" />
                                <span className="ml-1">Edit</span>
                              </Button>
                              {post.status === 'draft' && (
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-[#E2FF55] hover:bg-[#E2FF55]/10 hover:text-[#E2FF55]"
                                >
                                  <Send className="h-4 w-4" />
                                  <span className="ml-1">Publish</span>
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;

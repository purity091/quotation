import React, { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { Testimonial, ThemeConfig } from './types';
import {
  Layout,
  Type,
  Image as ImageIcon,
  Star,
  Plus,
  Trash2,
  MonitorPlay,
  Share2,
  Palette,
  Upload,
  Check,
  Code,
  Download
} from 'lucide-react';

// Initial Data
const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'أحمد المنصور',
    role: 'مدير منتج',
    companyOrCity: 'شركة تقنية',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    text: "لقد ساعدتني هذه المنصة بشكل كبير في تنظيم عملي وزيادة الإنتاجية. الواجهة سهلة الاستخدام والدعم الفني ممتاز جداً.",
    customCss: ''
  },
  {
    id: '2',
    name: 'سارة خالد',
    role: 'مصممة جرافيك',
    companyOrCity: 'الرياض',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4,
    text: "التصاميم الناتجة احترافية للغاية. أنصح بشدة باستخدام هذه الأداة لأي شخص يبحث عن الجودة والسرعة في الإنجاز.",
    customCss: ''
  },
  {
    id: '3',
    name: 'فيصل العتيبي',
    role: 'رائد أعمال',
    companyOrCity: 'جدة',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    text: "لم أتوقع هذه النتائج المذهلة في وقت قصير. فريق العمل يستحق كل الشكر والتقدير على هذا الجهد الرائع.",
    customCss: ''
  }
];

// Apple-Inspired Premium Themes
const THEMES: ThemeConfig[] = [
  {
    id: 'apple-silver',
    name: 'أبل فضي (Light)',
    primary: '#007aff', // Apple Blue
    secondary: '#8e8e93', // Apple Gray
    starColor: '#ff9500', // Apple Orange
    cardBg: '#ffffff',
    textColor: '#1d1d1f' // Apple Black
  },
  {
    id: 'apple-space-gray',
    name: 'رمادي فلكي (Space)',
    primary: '#0a84ff', // Light Blue
    secondary: '#636366',
    starColor: '#ffd60a', // Apple Yellow
    cardBg: '#1c1c1e', // Apple Dark Gray
    textColor: '#f5f5f7' // Apple Off-white
  },
  {
    id: 'apple-midnight',
    name: 'منتصف الليل (OLED)',
    primary: '#f5f5f7',
    secondary: '#3a3a3c',
    starColor: '#ffd60a',
    cardBg: '#000000',
    textColor: '#ffffff'
  },
  {
    id: 'apple-starlight',
    name: 'أضواء النجوم (Warm)',
    primary: '#bf5af2', // Apple Purple
    secondary: '#e5e5ea',
    starColor: '#ff3b30', // Apple Red
    cardBg: '#fbfbfd',
    textColor: '#1d1d1f'
  },
  {
    id: 'apple-pacific-blue',
    name: 'أزرق المحيط (Pro)',
    primary: '#64d2ff', // Sky Blue
    secondary: '#32ade6',
    starColor: '#ffd60a',
    cardBg: '#00334e',
    textColor: '#f5f5f7'
  },
  {
    id: 'glass-pro-dark',
    name: 'زجاجي داكن (Blur)',
    primary: '#ffffff',
    secondary: 'rgba(255, 255, 255, 0.2)',
    starColor: '#ff9500',
    cardBg: 'rgba(28, 28, 30, 0.8)',
    textColor: '#f5f5f7'
  },
  {
    id: 'glass-pro-light',
    name: 'زجاجي فاتح (Blur)',
    primary: '#007aff',
    secondary: 'rgba(0, 122, 255, 0.1)',
    starColor: '#ff9500',
    cardBg: 'rgba(255, 255, 255, 0.7)',
    textColor: '#1d1d1f'
  },
  {
    id: 'apple-alpine-green',
    name: 'أخضر جبلي (Pro)',
    primary: '#30d158', // Apple Green
    secondary: '#34c759',
    starColor: '#ffcc00',
    cardBg: '#1a3a32',
    textColor: '#f5f5f7'
  },
  {
    id: 'daylight-clean',
    name: 'بياض ناصع',
    primary: '#007aff',
    secondary: '#e5e5ea',
    starColor: '#ff9500',
    cardBg: '#ffffff',
    textColor: '#000000'
  },
  {
    id: 'daylight-cream',
    name: 'بيج ملكي',
    primary: '#a68a64',
    secondary: '#f5ebe0',
    starColor: '#d4af37',
    cardBg: '#faf9f6',
    textColor: '#432818'
  },
  {
    id: 'daylight-rose',
    name: 'وردي ناعم',
    primary: '#ff2d55',
    secondary: '#fff0f3',
    starColor: '#ff2d55',
    cardBg: '#fff9fa',
    textColor: '#800020'
  },
  {
    id: 'daylight-mint',
    name: 'نعناع منعش',
    primary: '#00c7be',
    secondary: '#e5faf9',
    starColor: '#00c7be',
    cardBg: '#f2fcfc',
    textColor: '#004d49'
  },
  {
    id: 'daylight-lavender',
    name: 'لافندر هادئ',
    primary: '#af52de',
    secondary: '#f3e8ff',
    starColor: '#af52de',
    cardBg: '#faf5ff',
    textColor: '#4c007d'
  }
];

const App: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'content' | 'design' | 'css'>('content');
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(THEMES[0]);
  const [isDownloading, setIsDownloading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const activeTestimonial = testimonials[activeIndex];

  const updateField = (field: keyof Testimonial, value: any) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[activeIndex] = {
      ...updatedTestimonials[activeIndex],
      [field]: value
    };
    setTestimonials(updatedTestimonials);
  };

  const updateThemeField = (field: keyof ThemeConfig, value: string) => {
    setCurrentTheme(prev => ({ ...prev, [field]: value }));
  };

  const addNewTestimonial = () => {
    const newId = (testimonials.length + 1).toString();
    const newTestimonial: Testimonial = {
      id: newId,
      name: 'عميل جديد',
      role: 'المسمى الوظيفي',
      companyOrCity: 'اسم الشركة',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 5,
      text: "اكتب رأي العميل هنا...",
      customCss: ''
    };
    setTestimonials([...testimonials, newTestimonial]);
    setActiveIndex(testimonials.length);
  };

  const deleteCurrentTestimonial = () => {
    if (testimonials.length <= 1) {
      alert("يجب أن يكون لديك توصية واحدة على الأقل.");
      return;
    }
    const updated = testimonials.filter((_, idx) => idx !== activeIndex);
    setTestimonials(updated);
    setActiveIndex(Math.max(0, activeIndex - 1));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        updateField('avatarUrl', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  // Helper: fetch a URL and return as base64 data URI
  const toDataUri = async (url: string): Promise<string> => {
    const res = await fetch(url);
    const blob = await res.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  // Helper: fetch Google Fonts CSS and embed all font files as base64
  const fetchFontEmbedCSS = async (): Promise<string | undefined> => {
    try {
      const fontUrl = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap';
      // Use a user-agent that requests woff2 format
      const fontRes = await fetch(fontUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
      });
      let css = await fontRes.text();

      // Find all url(...) references in the CSS
      const urlRegex = /url\((https:\/\/[^)]+)\)/g;
      const urls = new Set<string>();
      let match;
      while ((match = urlRegex.exec(css)) !== null) {
        urls.add(match[1]);
      }

      // Fetch each font file and convert to base64 data URI
      for (const fontFileUrl of urls) {
        try {
          const dataUri = await toDataUri(fontFileUrl);
          css = css.split(fontFileUrl).join(dataUri);
        } catch {
          // If a single font file fails, skip it
          console.warn('Failed to embed font file:', fontFileUrl);
        }
      }

      return css;
    } catch {
      return undefined;
    }
  };

  // Helper: convert all images inside a DOM node to base64 data URIs (for export)
  const convertImagesToBase64 = async (node: HTMLElement): Promise<Map<HTMLImageElement, string>> => {
    const images = node.querySelectorAll('img');
    const originalSrcs = new Map<HTMLImageElement, string>();

    for (const img of images) {
      const src = img.src;
      // Skip already base64 images
      if (src.startsWith('data:')) continue;

      originalSrcs.set(img, src);
      try {
        // Try fetch + blob approach first (works for same-origin and CORS-enabled images)
        const dataUri = await toDataUri(src);
        img.src = dataUri;
      } catch {
        // If fetch fails, try canvas approach for same-origin images
        try {
          const canvas = document.createElement('canvas');
          const tempImg = new Image();
          tempImg.crossOrigin = 'anonymous';
          await new Promise<void>((resolve, reject) => {
            tempImg.onload = () => resolve();
            tempImg.onerror = reject;
            tempImg.src = src + (src.includes('?') ? '&' : '?') + 'cachebust=' + Date.now();
          });
          canvas.width = tempImg.naturalWidth;
          canvas.height = tempImg.naturalHeight;
          canvas.getContext('2d')!.drawImage(tempImg, 0, 0);
          img.src = canvas.toDataURL('image/png');
        } catch {
          console.warn('Could not convert image to base64:', src);
        }
      }
    }

    return originalSrcs;
  };

  // Helper: restore original image sources after export
  const restoreImages = (originalSrcs: Map<HTMLImageElement, string>) => {
    for (const [img, src] of originalSrcs) {
      img.src = src;
    }
  };

  const handleDownload = async () => {
    if (carouselRef.current) {
      setIsDownloading(true);
      let originalSrcs: Map<HTMLImageElement, string> | null = null;
      try {
        // Step 1: Embed fonts as base64
        const fontEmbedCSS = await fetchFontEmbedCSS();

        // Step 2: Convert all images to base64 to avoid CORS issues
        originalSrcs = await convertImagesToBase64(carouselRef.current);

        // Step 3: Render to PNG
        const dataUrl = await htmlToImage.toPng(carouselRef.current, {
          cacheBust: true,
          pixelRatio: 2, // High quality 2160x2160
          width: 1080,
          height: 1080,
          ...(fontEmbedCSS ? { fontEmbedCSS } : { skipFonts: true }),
          style: {
            width: '1080px',
            height: '1080px',
            maxWidth: '1080px',
            margin: '0',
            transform: 'scale(1)',
          }
        });

        // Step 4: Download
        const link = document.createElement('a');
        link.download = `testimonial-card-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Failed to download image', err);
        alert('حدث خطأ أثناء تحميل الصورة. حاول رفع الصورة من جهازك بدلاً من استخدام رابط خارجي.');
      } finally {
        // Restore original image sources
        if (originalSrcs) restoreImages(originalSrcs);
        setIsDownloading(false);
      }
    }
  };

  return (
    <div className="flex h-screen bg-[#F2F3F5] overflow-hidden font-ibm">

      {/* Right Sidebar (Editor) */}
      <aside className="w-[400px] bg-white border-l border-gray-200 flex flex-col h-full shadow-lg z-20">

        {/* Sidebar Header */}
        <div className="h-16 border-b border-gray-100 flex items-center px-6 bg-white gap-4">
          <div className="flex items-center gap-2 text-indigo-600 flex-1">
            <Layout size={24} />
            <h1 className="font-bold text-lg">محرر التوصيات</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          <button
            onClick={() => setActiveTab('content')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'content' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            المحتوى
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'design' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            التصميم
          </button>
          <button
            onClick={() => setActiveTab('css')}
            className={`flex-1 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-1 ${activeTab === 'css' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <Code size={14} />
            تخصيص CSS
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">

          {activeTab === 'content' && (
            <>
              {/* Section: Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-800 mb-2">
                  <Type size={18} className="text-indigo-500" />
                  <h2 className="font-semibold text-lg">المحتوى النصي</h2>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">نص التوصية</label>
                    <textarea
                      value={activeTestimonial.text}
                      onChange={(e) => updateField('text', e.target.value)}
                      className="w-full h-32 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none text-sm leading-relaxed text-gray-900 placeholder-gray-400 transition"
                      placeholder="ماذا قال العميل؟"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100"></div>

              {/* Section: Client Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-800 mb-2">
                  <ImageIcon size={18} className="text-indigo-500" />
                  <h2 className="font-semibold text-lg">بيانات العميل والصورة</h2>
                </div>

                <div className="grid grid-cols-1 gap-4">

                  {/* Avatar Upload */}
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-2">صورة العميل</label>
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                        <img src={activeTestimonial.avatarUrl} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileUpload}
                        />
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="flex items-center justify-center gap-2 w-full py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700 transition mb-2"
                        >
                          <Upload size={16} />
                          رفع صورة
                        </button>
                        <input
                          type="text"
                          value={activeTestimonial.avatarUrl}
                          onChange={(e) => updateField('avatarUrl', e.target.value)}
                          placeholder="أو ضع رابط الصورة هنا"
                          className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-900 outline-none focus:border-indigo-500 dir-ltr text-left placeholder-gray-400"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    {/* Predefined Famous Investors */}
                    <div className="mt-3">
                      <label className="block text-xs font-medium text-gray-500 mb-2">أو اختر من الشخصيات الشهيرة:</label>
                      <div className="flex items-center gap-2 overflow-x-auto pb-2">
                        {[
                          { name: 'وارن بافيت', role: 'مستثمر ورجل أعمال', img: '/Warren Buffett.png' },
                          { name: 'تشارلي مونجر', role: 'مستثمر ونائب رئيس بيركشاير هاثاواي', img: '/Charlie Munger png.png' },
                          { name: 'بنيامين جراهام', role: 'أبو استثمار القيمة', img: '/Benjamin Graham.png' }
                        ].map(celeb => (
                          <button
                            key={celeb.name}
                            onClick={() => {
                              const updatedTestimonials = [...testimonials];
                              updatedTestimonials[activeIndex] = {
                                ...updatedTestimonials[activeIndex],
                                avatarUrl: celeb.img,
                                name: celeb.name,
                                role: celeb.role,
                                companyOrCity: 'الولايات المتحدة'
                              };
                              setTestimonials(updatedTestimonials);
                            }}
                            className="flex-shrink-0 w-12 h-12 rounded-full border-2 hover:border-indigo-500 transition-all overflow-hidden"
                            title={celeb.name}
                          >
                            <img src={celeb.img} alt={celeb.name} className="w-full h-full object-cover bg-gray-100" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">اسم العميل</label>
                    <input
                      type="text"
                      value={activeTestimonial.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm text-gray-900"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">الوظيفة</label>
                      <input
                        type="text"
                        value={activeTestimonial.role}
                        onChange={(e) => updateField('role', e.target.value)}
                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">الشركة / المدينة</label>
                      <input
                        type="text"
                        value={activeTestimonial.companyOrCity}
                        onChange={(e) => updateField('companyOrCity', e.target.value)}
                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: Client Info */}
            </>
          )}

          {activeTab === 'design' && (
            <>
              {/* Design Tab Content */}
              <div className="space-y-6">

                {/* Themes List */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-800 mb-2">
                    <Palette size={18} className="text-indigo-500" />
                    <h2 className="font-semibold text-lg">قوالب الألوان</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {THEMES.map(theme => (
                      <button
                        key={theme.id}
                        onClick={() => setCurrentTheme(theme)}
                        className={`p-3 rounded-xl border-2 flex items-center justify-between transition-all hover:scale-[1.02] active:scale-[0.98] ${currentTheme.id === theme.id ? 'border-indigo-600 bg-indigo-50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-1">
                            <div className="w-5 h-5 rounded-full shadow-sm border border-black/10 z-10" style={{ backgroundColor: theme.primary }}></div>
                            <div className="w-5 h-5 rounded-full shadow-sm border border-black/10" style={{ backgroundColor: theme.cardBg }}></div>
                          </div>
                          <span className="text-xs font-semibold text-gray-700">{theme.name}</span>
                        </div>
                        {currentTheme.id === theme.id && <Check size={14} className="text-indigo-600" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100"></div>

                {/* Custom Color Pickers */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-900">تخصيص الألوان</h3>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-600">اللون الأساسي</label>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 font-mono">{currentTheme.primary}</span>
                        <input
                          type="color"
                          value={currentTheme.primary}
                          onChange={(e) => updateThemeField('primary', e.target.value)}
                          className="w-8 h-8 rounded-lg cursor-pointer border-0 p-0 overflow-hidden"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-600">اللون الثانوي</label>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 font-mono">{currentTheme.secondary}</span>
                        <input
                          type="color"
                          value={currentTheme.secondary}
                          onChange={(e) => updateThemeField('secondary', e.target.value)}
                          className="w-8 h-8 rounded-lg cursor-pointer border-0 p-0 overflow-hidden"
                        />
                      </div>
                    </div>


                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-600">لون الخلفية</label>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 font-mono">{currentTheme.cardBg}</span>
                        <input
                          type="color"
                          value={currentTheme.cardBg}
                          onChange={(e) => updateThemeField('cardBg', e.target.value)}
                          className="w-8 h-8 rounded-lg cursor-pointer border-0 p-0 overflow-hidden"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-600">لون النص</label>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 font-mono">{currentTheme.textColor}</span>
                        <input
                          type="color"
                          value={currentTheme.textColor}
                          onChange={(e) => updateThemeField('textColor', e.target.value)}
                          className="w-8 h-8 rounded-lg cursor-pointer border-0 p-0 overflow-hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100"></div>

                {/* Logo Selector */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-900">اختر شعار المنصة</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      '/logos/Logo (1).svg',
                      '/logos/Logo (2).svg',
                      '/logos/Logo.svg',
                      '/logos/alinvestor white.svg',
                    ].map((logoPath, idx) => (
                      <button
                        key={idx}
                        onClick={() => updateThemeField('logoUrl', logoPath)}
                        className={`aspect-square rounded-xl border-2 flex items-center justify-center p-2 transition-all ${(currentTheme.logoUrl === logoPath) || (!currentTheme.logoUrl && logoPath === '/logos/Logo (2).svg')
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-100 hover:border-gray-200 bg-white'
                          }`}
                      >
                        <img
                          src={logoPath}
                          alt="Logo Option"
                          className="w-full h-full object-contain"
                          style={{ filter: 'brightness(0)' }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </>
          )}

          {activeTab === 'css' && (
            <>
              {/* CSS Customization Tab */}
              <div className="space-y-4 h-full flex flex-col">
                <div className="flex items-center gap-2 text-gray-800">
                  <Code size={18} className="text-green-500" />
                  <h2 className="font-semibold text-lg">تخصيص النمط</h2>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed">
                  أضف أكواد CSS مخصصة لهذه الشريحة. يمكنك استهداف العناصر باستخدام الأسماء القياسية.
                  <br />
                  <span className="mt-2 block bg-gray-100 p-2 rounded text-gray-600 font-mono">
                    .slide-title &#123; color: red; &#125;
                  </span>
                </p>

                <div className="bg-[#1e1e1e] rounded-lg border border-gray-700 p-4 flex-1 flex flex-col relative overflow-hidden">
                  <div className="text-xs text-gray-500 mb-2 font-mono border-b border-gray-700 pb-2">/* هنا أكتب الـ CSS */</div>
                  <textarea
                    value={activeTestimonial.customCss || ''}
                    onChange={(e) => updateField('customCss', e.target.value)}
                    className="flex-1 w-full bg-transparent text-[#d4d4d4] font-mono text-sm outline-none resize-none placeholder-gray-600"
                    placeholder=".slide-text { font-weight: bold; }"
                    spellCheck={false}
                    dir="ltr"
                  />
                </div>

                <div className="p-3 bg-blue-50 text-blue-800 text-xs rounded-lg border border-blue-100">
                  <strong>ملاحظة:</strong> يتم تطبيق هذه التنسيقات فقط على الشريحة الحالية.
                  <ul className="mt-2 space-y-1 list-disc list-inside font-mono text-[10px]">
                    <li>.slide-card</li>
                    <li>.slide-text</li>
                    <li>.slide-name</li>
                    <li>.slide-info</li>
                    <li>.slide-rating</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Sidebar Footer Actions */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 space-y-3">
          <button
            onClick={addNewTestimonial}
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center justify-center gap-2 transition font-medium shadow-sm hover:shadow"
          >
            <Plus size={18} />
            <span>إضافة توصية جديدة</span>
          </button>

          <button
            onClick={deleteCurrentTestimonial}
            className="w-full py-2.5 bg-white border border-red-200 text-red-500 hover:bg-red-50 rounded-lg flex items-center justify-center gap-2 transition font-medium"
          >
            <Trash2 size={18} />
            <span>حذف التوصية الحالية</span>
          </button>
        </div>
      </aside>

      {/* Main Preview Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">

        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm z-10">
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">حالة الحفظ: <span className="text-green-600 font-medium">تم الحفظ</span></span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex items-center gap-2 px-4 py-2 text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 rounded-lg transition text-sm font-medium"
            >
              <Download size={16} />
              <span>{isDownloading ? 'جاري التحميل...' : 'تحميل صورة PNG'}</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition text-sm font-medium">
              <MonitorPlay size={16} />
              <span>معاينة حية</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg transition text-sm font-medium shadow-lg shadow-slate-200">
              <Share2 size={16} />
              <span>نشر الكاروسيل</span>
            </button>
          </div>
        </header>

        {/* Canvas Area */}
        <div className="flex-1 bg-[#E7E9ED] overflow-y-auto flex flex-col items-center justify-center p-8 relative">

          {/* Canvas Grid Background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>

          <div ref={carouselRef} className="relative z-10">
            <TestimonialsCarousel
              testimonials={testimonials}
              activeIndex={activeIndex}
              onIndexChange={setActiveIndex}
              theme={currentTheme}
            />
          </div>

        </div>

        {/* Bottom Thumbnails Strip */}
        <div className="h-28 bg-white border-t border-gray-200 p-4 flex items-center justify-center gap-4 overflow-x-auto z-10">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveIndex(idx)}
              className={`relative group flex-shrink-0 w-16 h-16 rounded-xl border-2 overflow-hidden transition-all duration-300 ${idx === activeIndex
                ? 'border-indigo-600 shadow-md ring-2 ring-indigo-100'
                : 'border-transparent hover:border-gray-300 opacity-60 hover:opacity-100'
                }`}
            >
              <img src={t.avatarUrl} alt={t.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blac k/10 group-hover:bg-transparent transition"></div>
            </button>
          ))}

          <button
            onClick={addNewTestimonial}
            className="w-16 h-16 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50 transition"
          >
            <Plus size={24} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
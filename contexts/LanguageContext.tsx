'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'vi'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero
    'hero.badge': 'Trusted by 100+ Businesses',
    'hero.title': 'Modern Web Solutions for',
    'hero.titleHighlight': 'Your Business',
    'hero.description': 'We create stunning websites, powerful web applications, and premium digital products. From React to Next.js, we bring your digital vision to life.',
    'hero.cta1': 'Start Your Project',
    'hero.cta2': 'View Our Work',
    'hero.stat1': 'Projects Completed',
    'hero.stat2': 'Years Experience',
    'hero.stat3': 'Client Rating',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive digital solutions to help your business grow and succeed online',
    'services.viewAll': 'View All Services',
    'service.webDev': 'Web Development',
    'service.webDevDesc': 'Custom websites built with modern technologies like React, Next.js, and TypeScript for optimal performance.',
    'service.uiux': 'UI/UX Design',
    'service.uiuxDesc': 'Beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement.',
    'service.ecommerce': 'E-commerce Solutions',
    'service.ecommerceDesc': 'Complete online stores with secure payments, inventory management, and seamless checkout experiences.',
    'service.backend': 'Backend Development',
    'service.backendDesc': 'Robust server-side solutions with databases, APIs, and scalable architecture for your applications.',
    'service.responsive': 'Responsive Design',
    'service.responsiveDesc': 'Mobile-first designs that look perfect on all devices, from smartphones to desktop computers.',
    'service.seo': 'SEO Optimization',
    'service.seoDesc': 'Search engine optimization to improve your visibility and drive organic traffic to your website.',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Explore our portfolio of successful projects delivered for clients worldwide',
    'projects.viewAll': 'View All Projects',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'Hear from businesses that trusted us to bring their digital vision to life',
    'testimonial1.name': 'Sarah Johnson',
    'testimonial1.role': 'CEO, TechStart Inc',
    'testimonial1.content': 'Working with Wren Digital was an absolute pleasure. They delivered our e-commerce platform ahead of schedule with exceptional quality. The attention to detail and communication throughout the project was outstanding.',
    'testimonial2.name': 'Michael Chen',
    'testimonial2.role': 'Founder, CloudSolutions',
    'testimonial2.content': 'The team transformed our outdated website into a modern, high-performing application. Our conversion rate increased by 150% within the first month. Highly recommended for any business looking to scale.',
    'testimonial3.name': 'Emily Rodriguez',
    'testimonial3.role': 'Marketing Director, GrowthLab',
    'testimonial3.content': 'What impressed me most was their ability to understand our business needs and translate them into a beautiful, functional website. The project was completed on time and within budget.',
    'testimonial4.name': 'David Park',
    'testimonial4.role': 'Owner, Urban Bistro',
    'testimonial4.content': 'Our restaurant booking system has been a game-changer. Customers love the easy-to-use interface, and we\'ve seen a significant increase in reservations. The team went above and beyond.',
    'testimonial5.name': 'Lisa Thompson',
    'testimonial5.role': 'Freelance Designer',
    'testimonial5.content': 'As a freelancer, I needed a portfolio that showcased my work professionally. Wren Digital created exactly what I envisioned and more. I\'ve received numerous compliments and new project inquiries.',
    'testimonial6.name': 'James Wilson',
    'testimonial6.role': 'Director, FitLife Gym',
    'testimonial6.content': 'The fitness app they developed for us has been incredibly successful. Members love tracking their progress, and it\'s helped us build a stronger community. Professional service from start to finish.',
    
    // CTA
    'cta.title': 'Ready to Build Something Amazing?',
    'cta.subtitle': "Let's discuss your project and create a digital solution that drives results for your business.",
    'cta.button1': 'Get Started Today',
    'cta.button2': 'Email Us',
    'cta.support': 'Support Available',
    'cta.satisfaction': 'Satisfaction Guaranteed',
    'cta.delivery': 'Project Delivery',
    
    // Footer
    'footer.description': 'Professional web development and digital solutions. Building modern websites and applications for businesses worldwide.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.service1': 'Web Development',
    'footer.service2': 'React Applications',
    'footer.service3': 'E-commerce Solutions',
    'footer.service4': 'Digital Products',
    'footer.aboutUs': 'About Us',
  },
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.services': 'Dịch vụ',
    'nav.projects': 'Dự án',
    'nav.about': 'Về chúng tôi',
    'nav.contact': 'Liên hệ',
    'nav.getStarted': 'Bắt đầu',
    
    // Hero
    'hero.badge': 'Được tin tưởng bởi hơn 100 doanh nghiệp',
    'hero.title': 'Giải pháp Web Hiện Đại cho',
    'hero.titleHighlight': 'Doanh Nghiệp của Bạn',
    'hero.description': 'Chúng tôi tạo ra các trang web ấn tượng, ứng dụng web mạnh mẽ và sản phẩm kỹ thuật số cao cấp. Từ React đến Next.js, chúng tôi hiện thực hóa tầm nhìn kỹ thuật số của bạn.',
    'hero.cta1': 'Bắt đầu dự án',
    'hero.cta2': 'Xem các dự án',
    'hero.stat1': 'Dự án hoàn thành',
    'hero.stat2': 'Năm kinh nghiệm',
    'hero.stat3': 'Đánh giá',
    
    // Services
    'services.title': 'Dịch vụ của chúng tôi',
    'services.subtitle': 'Giải pháp kỹ thuật số toàn diện giúp doanh nghiệp phát triển và thành công trực tuyến',
    'services.viewAll': 'Xem tất cả dịch vụ',
    'service.webDev': 'Phát triển Website',
    'service.webDevDesc': 'Website tùy chỉnh được xây dựng với công nghệ hiện đại như React, Next.js và TypeScript để đạt hiệu suất tối ưu.',
    'service.uiux': 'Thiết kế UI/UX',
    'service.uiuxDesc': 'Giao diện đẹp mắt, trực quan mang lại trải nghiệm người dùng xuất sắc và thúc đẩy tương tác.',
    'service.ecommerce': 'Giải pháp Thương mại điện tử',
    'service.ecommerceDesc': 'Cửa hàng trực tuyến hoàn chỉnh với thanh toán an toàn, quản lý kho và trải nghiệm thanh toán liền mạch.',
    'service.backend': 'Phát triển Backend',
    'service.backendDesc': 'Giải pháp máy chủ mạnh mẽ với cơ sở dữ liệu, API và kiến trúc có khả năng mở rộng cho ứng dụng của bạn.',
    'service.responsive': 'Thiết kế Responsive',
    'service.responsiveDesc': 'Thiết kế mobile-first hoàn hảo trên mọi thiết bị, từ điện thoại thông minh đến máy tính để bàn.',
    'service.seo': 'Tối ưu hóa SEO',
    'service.seoDesc': 'Tối ưu hóa công cụ tìm kiếm để cải thiện khả năng hiển thị và thu hút lưu lượng truy cập tự nhiên.',
    
    // Projects
    'projects.title': 'Dự án nổi bật',
    'projects.subtitle': 'Khám phá danh mục các dự án thành công được thực hiện cho khách hàng trên toàn thế giới',
    'projects.viewAll': 'Xem tất cả dự án',
    
    // Testimonials
    'testimonials.title': 'Đánh giá từ khách hàng',
    'testimonials.subtitle': 'Phản hồi từ các doanh nghiệp đã tin tưởng và phát triển cùng chúng tôi',
    'testimonial1.name': 'Sarah Johnson',
    'testimonial1.role': 'CEO, TechStart Inc',
    'testimonial1.content': 'Làm việc với Wren Digital là một trải nghiệm tuyệt vời. Họ đã bàn giao nền tảng thương mại điện tử trước thời hạn với chất lượng đặc biệt. Sự chú ý đến chi tiết và giao tiếp trong suốt dự án rất xuất sắc.',
    'testimonial2.name': 'Michael Chen',
    'testimonial2.role': 'Người sáng lập, CloudSolutions',
    'testimonial2.content': 'Đội ngũ đã biến website lỗi thời của chúng tôi thành một ứng dụng hiện đại, hiệu suất cao. Tỷ lệ chuyển đổi tăng 150% trong tháng đầu tiên. Rất khuyến khích cho bất kỳ doanh nghiệp nào muốn mở rộng quy mô.',
    'testimonial3.name': 'Emily Rodriguez',
    'testimonial3.role': 'Giám đốc Marketing, GrowthLab',
    'testimonial3.content': 'Điều ấn tượng nhất là khả năng hiểu nhu cầu kinh doanh của chúng tôi và chuyển thành một website đẹp, chức năng. Dự án hoàn thành đúng hạn và trong ngân sách.',
    'testimonial4.name': 'David Park',
    'testimonial4.role': 'Chủ nhà hàng, Urban Bistro',
    'testimonial4.content': 'Hệ thống đặt bàn online đã giúp nhà hàng tôi tăng trưởng mạnh mẽ. Khách hàng rất thích giao diện dễ sử dụng và số lượng đặt bàn tăng đáng kể. Đội ngũ làm việc rất chuyên nghiệp.',
    'testimonial5.name': 'Lisa Thompson',
    'testimonial5.role': 'Nhà thiết kế tự do',
    'testimonial5.content': 'Là freelancer, tôi cần một portfolio chuyên nghiệp. Wren Digital đã tạo ra chính xác những gì tôi mong muốn và còn hơn thế nữa. Tôi nhận được nhiều lời khen và dự án mới nhờ website này.',
    'testimonial6.name': 'James Wilson',
    'testimonial6.role': 'Giám đốc, FitLife Gym',
    'testimonial6.content': 'Ứng dụng fitness họ phát triển cho chúng tôi rất thành công. Hội viên thích theo dõi tiến độ và nó giúp xây dựng cộng đồng mạnh mẽ hơn. Dịch vụ chuyên nghiệp từ đầu đến cuối.',
    
    // CTA
    'cta.title': 'Sẵn sàng tạo ra điều gì đó tuyệt vời?',
    'cta.subtitle': 'Hãy thảo luận về dự án của bạn và tạo ra giải pháp kỹ thuật số mang lại kết quả cho doanh nghiệp.',
    'cta.button1': 'Bắt đầu ngay hôm nay',
    'cta.button2': 'Gửi email',
    'cta.support': 'Hỗ trợ',
    'cta.satisfaction': 'Đảm bảo hài lòng',
    'cta.delivery': 'Giao hàng nhanh',
    
    // Footer
    'footer.description': 'Phát triển website chuyên nghiệp và giải pháp số. Xây dựng website hiện đại và ứng dụng web cho doanh nghiệp trên toàn thế giới.',
    'footer.services': 'Dịch vụ',
    'footer.company': 'Công ty',
    'footer.contact': 'Liên hệ',
    'footer.rights': 'Bảo lưu mọi quyền.',
    'footer.service1': 'Phát triển Website',
    'footer.service2': 'Ứng dụng React',
    'footer.service3': 'Giải pháp Thương mại điện tử',
    'footer.service4': 'Sản phẩm kỹ thuật số',
    'footer.aboutUs': 'Về chúng tôi',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// import { Palette, Megaphone, BarChart3 } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
    //   icon: Palette,
      title: 'Design & Branding',
      description:
        'Create stunning Design and Visual Identities that capture attention and build lasting impressions',
      color: 'bg-purple-600',
    },
    {
    //   icon: Megaphone,
      title: 'Marketing & GTM',
      description:
        'Strategic go-to-market execution that positions your brand for maximum market penetration and growth',
      color: 'bg-purple-600',
    },
    {
    //   icon: BarChart3,
      title: 'Growth & Scale',
      description:
        'Data-driven strategies that fuel sustainable growth and scale your business to new heights',
      color: 'bg-purple-600',
    },
  ];

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-12">
          We're not just another agency. We're your growth partner—combining creative excellence with
          strategic marketing expertise to deliver results that matter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            // const Icon = service.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className={`${service.color} p-4 rounded-xl mb-6`}>
                  {/* <Icon className="w-8 h-8 text-white" /> */}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

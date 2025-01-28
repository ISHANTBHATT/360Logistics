import { Globe2, Clock, Plane, Package, CreditCard, Truck } from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Delivery",
    description:
      "Sitting at home importing business goods, saves time and costs more than before.",
  },
  {
    icon: Clock,
    title: "24/7 support",
    description:
      "Free Consultation, support in finding sources of goods, support in counting goods",
  },
  {
    icon: Plane,
    title: "Order and ship internationally",
    description:
      "Order from all Chinese e-commerce websites such as taobao, 1688, tmall",
  },
  {
    icon: Package,
    title: "Easily manage orders",
    description:
      "The e-wallet system helps make quick transactions, accumulate points, receive incentives",
  },
  {
    icon: CreditCard,
    title: "Transaction alipay, wechat",
    description:
      "The e-wallet system helps make quick transactions, accumulate points and receive incentives",
  },
  {
    icon: Truck,
    title: "Sending from China to Vietnam",
    description:
      "Order from all Chinese e-commerce websites such as taobao, 1688, tmall",
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 relative py-20 bg-white">
      {/* Vertical dotted lines */}
      <div
        className="hidden md:block absolute left-1/3 top-0 bottom-0 border-l border-dashed border-gray-200"
        style={{
          borderStyle: "dashed",
          borderWidth: "0 0 0 2px",
          borderSpacing: "0 8px",
        }}
      />
      <div
        className="hidden md:block absolute left-2/3 top-0 bottom-0 border-l border-dashed border-gray-200"
        style={{
          borderStyle: "dashed",
          borderWidth: "0 0 0 2px",
          borderSpacing: "0 8px",
        }}
      />

      {/* Horizontal dotted line */}
      <div
        className="hidden md:block absolute left-0 right-0 top-1/2 border-t border-dashed border-gray-200"
        style={{
          borderStyle: "dashed",
          borderWidth: "2px 0 0 0",
          borderSpacing: "8px 0",
        }}
      />

      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center relative"
          >
            <div className="mb-4 p-3 rounded-full bg-blue-50">
              <Icon className="w-8 h-8 text-[#5db5e9]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
}

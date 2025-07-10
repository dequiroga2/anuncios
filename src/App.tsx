import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  User,
  Building,
  Brain,
  DollarSign,
  Settings,
  MessageCircle,
  TrendingUp,
  Shield,
  Sparkles
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    automationDescription: '',
    hasCapital: '',
    hasPreviousAutomation: '',
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare JSON data for webhook
      const webhookData = {
        nombre: formData.name,
        email: formData.email,
        telefono: formData.phone,
        tipo_negocio: formData.businessType,
        descripcion_automatizacion: formData.automationDescription,
        tiene_capital: formData.hasCapital,
        experiencia_automatizacion: formData.hasPreviousAutomation,
        comentarios: formData.comments,
        fecha_envio: new Date().toISOString(),
        origen: 'landing_page_ai_automation'
      };

      // Send data to webhook
      const response = await fetch('https://automation.luminotest.com/webhook/bc47d271-07cd-4d62-a0f8-394035b57b77', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });

      if (response.ok) {
        setSubmitted(true);
        
        // Reset form after success message
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            businessType: '',
            automationDescription: '',
            hasCapital: '',
            hasPreviousAutomation: '',
            comments: ''
          });
        }, 3000);
      } else {
        throw new Error('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const successCases = [
    {
      company: "Análisis base de datos",
      industry: "Agente SQL",
      result: "20% más clientes",
      description: "Automatización completa del proceso de busqueda en bases de datos con IA, reduciendo tiempos de respuesta de horas a segundos.",
      savings: "+ $3,000/mes",
      timeframe: "1 mes"
    },
    {
      company: "Contenido automatizado",
      industry: "Generador de videos",
      result: "85% reducción de tiempo en creación de contenido",
      description: "Sistema de IA generador de videos para creadores de contenido.",
      savings: "$10,000/mes",
      timeframe: "2 meses"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bot className="w-8 h-8 text-cyan-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI Automation Pro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <span className="text-sm text-gray-300">🚀 Transformamos tu negocio con IA</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                  Automatiza tu Negocio
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  con Inteligencia Artificial
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Multiplica tu productividad, reduce costos hasta un 70% y escala tu negocio 
                sin límites con nuestras soluciones de automatización inteligente.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span>Resultados en poco tiempo</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span>Aumento de tiempo</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span>Soporte especializado</span>
              </div>
            </div>

            <div className="flex justify-center">
              <a href="#form" className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2">
                <span>Comienza tu Transformación</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Success Cases Section */}
        <section className="px-6 py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Casos de Éxito Reales
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Descubre cómo hemos transformado negocios como el tuyo con nuestras soluciones de IA
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {successCases.map((case_, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{case_.company}</h3>
                        <p className="text-cyan-400 text-sm font-medium">{case_.industry}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-2xl font-bold text-cyan-400 mb-2">{case_.result}</p>
                      <p className="text-gray-300 leading-relaxed">{case_.description}</p>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-semibold">{case_.savings} ahorrados</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400">{case_.timeframe} implementación</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="form" className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Recibe tu Consultoría Gratuita
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Completa el formulario y descubre cómo podemos automatizar tu negocio en solo 30 días
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl" />
              
              {submitted ? (
                <div className="relative z-10 text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">¡Gracias por tu interés!</h3>
                  <p className="text-xl text-gray-300 mb-6">
                    Hemos recibido tu información. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm">¡Prepárate para transformar tu negocio!</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Tipo de negocio *
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Selecciona tu industria</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="servicios">Servicios</option>
                        <option value="salud">Salud</option>
                        <option value="educacion">Educación</option>
                        <option value="finanzas">Finanzas</option>
                        <option value="manufactura">Manufactura</option>
                        <option value="tecnologia">Tecnología</option>
                        <option value="inmobiliario">Inmobiliario</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Brain className="w-4 h-4 inline mr-2" />
                      ¿Qué procesos quieres automatizar con IA? *
                    </label>
                    <textarea
                      name="automationDescription"
                      value={formData.automationDescription}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200 resize-none"
                      placeholder="Describe los procesos que te gustaría automatizar (atención al cliente, ventas, inventario, etc.)"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <DollarSign className="w-4 h-4 inline mr-2" />
                        ¿Tienes capital de inversión? *
                      </label>
                      <select
                        name="hasCapital"
                        value={formData.hasCapital}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="si">Sí, tengo presupuesto definido</option>
                        <option value="evaluando">Estoy evaluando opciones</option>
                        <option value="no">No tengo presupuesto actualmente</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Settings className="w-4 h-4 inline mr-2" />
                        ¿Has automatizado procesos antes? *
                      </label>
                      <select
                        name="hasPreviousAutomation"
                        value={formData.hasPreviousAutomation}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="si">Sí, he automatizado procesos</option>
                        <option value="basico">Solo herramientas básicas</option>
                        <option value="no">No, sería mi primera vez</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      Comentarios adicionales
                    </label>
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200 resize-none"
                      placeholder="¿Hay algo específico que te gustaría que sepamos? (opcional)"
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>Solicitar Consultoría Gratuita</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 pt-4">
                    <Shield className="w-4 h-4" />
                    <span>Tu información está protegida y no será compartida</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-slate-700/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Bot className="w-6 h-6 text-cyan-400" />
              <span className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI Automation Pro
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 AI Automation Pro. Transformando negocios con inteligencia artificial.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
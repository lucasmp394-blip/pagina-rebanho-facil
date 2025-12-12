import { Heart, MapPin, Users, Shield, CheckCircle, ArrowRight, FileText, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B7355] to-[#5C4033]">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-[#3E2723] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#D2691E]/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-[#F4A460]" />
              <span className="text-sm text-[#F4A460] font-medium">Gestão Completa da Sua Fazenda</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Rebanho Fácil
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              O aplicativo que transforma a gestão do seu rebanho em uma tarefa simples e eficiente
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-[#D2691E] to-[#CD853F] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-2">
                Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                Ver Demonstração
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#8B7355"/>
          </svg>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Tudo que Você Precisa em Um Só Lugar
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Gerencie cada aspecto do seu rebanho com ferramentas profissionais e fáceis de usar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 - Cadastro de Animais */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#D2691E] to-[#CD853F] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-4">Cadastro de Animais</h3>
              <p className="text-gray-700 leading-relaxed">
                Registre todos os dados dos seus animais: raça, idade, origem, brinco e histórico completo. Tenha todas as informações na palma da mão.
              </p>
            </div>

            {/* Feature 2 - Controle de Peso */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-4">Controle de Peso</h3>
              <p className="text-gray-700 leading-relaxed">
                Acompanhe a evolução do peso do rebanho com gráficos e relatórios. Identifique o melhor momento para venda e maximize seus lucros.
              </p>
            </div>

            {/* Feature 3 - Gestão de Vacinas */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#CD853F] to-[#DEB887] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-4">Gestão de Vacinas</h3>
              <p className="text-gray-700 leading-relaxed">
                Nunca mais perca o prazo de vacinação. Receba alertas automáticos e mantenha o calendário sanitário sempre em dia.
              </p>
            </div>

            {/* Feature 4 - Manejo Inteligente */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#A0522D] to-[#8B4513] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-4">Manejo Inteligente</h3>
              <p className="text-gray-700 leading-relaxed">
                Planeje e registre todas as atividades de manejo: desmame, castração, vermifugação e muito mais. Organize sua rotina com eficiência.
              </p>
            </div>

            {/* Feature 5 - Controle de Reprodução */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#D2691E] to-[#CD853F] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-4">Controle de Reprodução</h3>
              <p className="text-gray-700 leading-relaxed">
                Gerencie coberturas, inseminações, gestações e nascimentos. Aumente a taxa de natalidade e melhore a genética do seu rebanho.
              </p>
            </div>

            {/* Feature 6 - Gestão de Vendas */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-4">Gestão de Vendas</h3>
              <p className="text-gray-700 leading-relaxed">
                Registre todas as vendas, controle valores, compradores e documentação. Tenha relatórios financeiros completos do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 bg-[#3E2723]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Por Que Escolher o Rebanho Fácil?
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#D2691E]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Interface Simples e Intuitiva</h4>
                    <p className="text-gray-300">Desenvolvido pensando no produtor rural, sem complicações desnecessárias.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#D2691E]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Funciona Offline</h4>
                    <p className="text-gray-300">Acesse seus dados mesmo sem internet. Sincronize quando estiver conectado.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#D2691E]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Relatórios Completos</h4>
                    <p className="text-gray-300">Gere relatórios detalhados para tomar decisões estratégicas baseadas em dados.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#D2691E]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Suporte Dedicado</h4>
                    <p className="text-gray-300">Equipe especializada pronta para ajudar você a aproveitar ao máximo o app.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#D2691E] to-[#CD853F] rounded-2xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <Users className="w-8 h-8 text-white" />
                    <div>
                      <p className="text-3xl font-bold text-white">5.000+</p>
                      <p className="text-gray-200">Produtores Ativos</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <Shield className="w-8 h-8 text-white" />
                    <div>
                      <p className="text-3xl font-bold text-white">150.000+</p>
                      <p className="text-gray-200">Animais Cadastrados</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                    <div>
                      <p className="text-3xl font-bold text-white">Todo Brasil</p>
                      <p className="text-gray-200">Presente em Todos os Estados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-[#3E2723] to-[#5C4033] rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Pronto Para Revolucionar Sua Fazenda?
              </h2>
              
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de produtores que já transformaram a gestão do rebanho com o Rebanho Fácil
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-gradient-to-r from-[#D2691E] to-[#CD853F] text-white px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3">
                  Começar Gratuitamente
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-gray-300 mt-6 text-sm">
                ✓ Sem cartão de crédito • ✓ Teste grátis por 30 dias • ✓ Cancele quando quiser
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3E2723] text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-300">
            © 2024 Rebanho Fácil - Gestão Inteligente de Rebanho
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Desenvolvido com dedicação para o produtor rural brasileiro
          </p>
        </div>
      </footer>
    </div>
  );
}

// ===== NAVIGATION =====
// ===== TRANSLATIONS =====
const translations = {
    it: {
        // Navbar
        'nav.home': 'Home',
        'nav.timer': 'Timer',
        'nav.clock': 'Orario',
        'nav.settings': 'Impostazioni',
        'nav.contact': 'Contatti',
        
        // Hero Section
        'hero.title': 'Abdul Time Clock',
        'hero.subtitle': 'La tua applicazione per gestire il tempo in modo intelligente',
        'hero.startTimer': 'Avvia Timer',
        'hero.viewClock': 'Vedi Orario',
        
        // Stats
        'stats.profileViews': 'Visualizzazioni Profilo',
        
        // Features
        'feature.timer.title': 'Timer Preciso',
        'feature.timer.desc': 'Imposta timer personalizzati con precisione al secondo. Perfetto per allenamenti, cucina o lavoro.',
        'feature.world.title': '150+ Città Globali',
        'feature.world.desc': 'Visualizza l\'orario di oltre 150 città in tutto il mondo in tempo reale.',
        'feature.favorites.title': 'Città Preferite',
        'feature.favorites.desc': 'Salva le tue città preferite per un accesso rapido e immediato.',
        'feature.theme.title': 'Tema Chiaro/Scuro',
        'feature.theme.desc': 'Passa dal tema scuro a quello chiaro secondo le tue preferenze.',
        'feature.multilang.title': 'Multilingua',
        'feature.multilang.desc': 'Disponibile in 5 lingue: Italiano, Inglese, Spagnolo, Francese e Tedesco.',
        'feature.responsive.title': 'Design Responsive',
        'feature.responsive.desc': 'Funziona perfettamente su desktop, tablet e smartphone.',
        
        // Timer Section
        'timer.title': '⏰ Timer',
        'timer.minutes': 'Minuti',
        'timer.seconds': 'Secondi',
        'timer.alarmSound': 'Suono Allarme',
        'timer.start': 'Avvia',
        'timer.pause': 'Pausa',
        'timer.reset': 'Reset',
        'timer.running': 'In corso...',
        'timer.resume': 'Riprendi',
        'timer.beep': '🔔 Beep Classico',
        'timer.bell': '🔔 Campana',
        'timer.digital': '📱 Digitale',
        'timer.alarm': '⏰ Sveglia',
        'timer.gentle': '🎵 Dolce',
        'timer.saved': 'Timer Salvati',
        'timer.noSaved': 'Nessun timer salvato. Crea i tuoi preset personalizzati!',
        'timer.addPreset': 'Aggiungi Timer Personalizzato',
        'timer.presetName': 'Nome Timer',
        'timer.save': 'Salva',
        'timer.cancel': 'Annulla',
        'timer.history': 'Storico Timer',
        'timer.noHistory': 'Nessun timer completato ancora',
        'timer.stats': 'Statistiche',
        'timer.totalTimers': 'Timer Completati',
        'timer.totalTime': 'Tempo Totale',
        'timer.avgTimer': 'Media Timer',
        'timer.longest': 'Timer Più Lungo',
        
        // Quick Actions
        'quick.timer': 'Timer',
        'quick.worldclock': 'Orari Mondiali',
        'quick.settings': 'Impostazioni',
        
        // Clock Section
        'clock.title': '🌐 Orario Mondiale',
        'clock.favorites': 'Preferiti',
        'clock.noFavorites': 'Nessun preferito. Clicca sulla stella per salvare una città.',
        'clock.search': 'Cerca paese o città...',
        'clock.allCities': 'Tutte le Città',
        
        // Settings
        'settings.title': '⚙️ Impostazioni',
        'settings.theme': 'Tema',
        'settings.darkMode': 'Modalità Scura',
        'settings.language': 'Lingua',
        'settings.selectLanguage': 'Seleziona Lingua',
        'settings.languageDesc': 'La lingua selezionata verrà applicata a tutta l\'applicazione.',
        'settings.timerSettings': 'Timer',
        'settings.soundNotifications': 'Notifiche sonore',
        'settings.autoRepeat': 'Auto-ripeti timer',
        'settings.clockSettings': 'Orologi',
        'settings.format24': 'Formato 24 ore',
        'settings.showSeconds': 'Mostra secondi',
        'settings.data': 'Dati',
        'settings.resetStats': '🗑️ Resetta Statistiche',
        'settings.resetStatsDesc': 'Reimposta il contatore delle visualizzazioni a zero.',
        'settings.resetConfirm': 'Sei sicuro di voler resettare le statistiche delle visualizzazioni?',
        'settings.resetSuccess': '✅ Statistiche resettate con successo!',
        'settings.languageChanged': '✅ Lingua impostata su:',
        
        // Notification
        'notification.timerFinished': '⏰ Timer Terminato!',
        'notification.timeUp': 'Il tempo è scaduto',
        
        // Footer
        'footer.rights': '© 2026 Abdul Time Clock. Tutti i diritti riservati.',
        
        // Contact Section
        'contact.title': '📧 Contatti',
        'contact.subtitle': 'Mettiti in contatto con noi',
        'contact.description': 'Hai domande, suggerimenti o vuoi semplicemente dire ciao? Siamo qui per te!',
        'contact.email': 'Email',
        'contact.phone': 'Telefono',
        'contact.location': 'Posizione',
        'contact.sendEmail': 'Invia Email',
        'contact.call': 'Chiamaci',
        'contact.viewMap': 'Vedi Mappa',
        'contact.followUs': 'Seguici sui Social',
        'contact.formTitle': 'Inviaci un Messaggio',
        'contact.name': 'Nome',
        'contact.emailLabel': 'Email',
        'contact.subject': 'Oggetto',
        'contact.message': 'Messaggio',
        'contact.send': 'Invia Messaggio',
        
        // Footer
        'footer.rights': '© 2026 Abdul Time Clock. Tutti i diritti riservati.',
        'footer.description': 'La tua app definitiva per gestire il tempo in modo intelligente e produttivo. Usata da migliaia di persone in tutto il mondo.',
        'footer.quickLinks': 'Link Rapidi',
        'footer.features': 'Funzionalità',
        'footer.preciseTimer': 'Timer Preciso',
        'footer.worldClock': 'Orologi Mondiali',
        'footer.multilang': 'Multilingua',
        'footer.favorites': 'Preferiti',
        'footer.followUs': 'Seguici',
        'footer.newsletter': 'Newsletter',
        'footer.newsletterDesc': 'Ricevi aggiornamenti e novità',
        'footer.emailPlaceholder': 'La tua email',
        'footer.version': 'v1.0.0',
        'footer.madeWith': 'Fatto con',
        'footer.in': 'in Italia',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Termini di Servizio',
        'footer.cookies': 'Cookie Policy',
        'footer.totalUsers': 'Utenti Totali',
        'footer.timersRun': 'Timer Eseguiti',
        'footer.cities': 'Città Mondiali',
        'footer.rating': 'Valutazione',
        'footer.badge1': '100% Gratis',
        'footer.badge2': 'Sicuro & Privato',
        
        // Header
        'header.online': 'Online'
    },
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.timer': 'Timer',
        'nav.clock': 'Clock',
        'nav.settings': 'Settings',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Abdul Time Clock',
        'hero.subtitle': 'Your application to manage time intelligently',
        'hero.startTimer': 'Start Timer',
        'hero.viewClock': 'View Clock',
        
        // Stats
        'stats.profileViews': 'Profile Views',
        
        // Features
        'feature.timer.title': 'Precise Timer',
        'feature.timer.desc': 'Set custom timers with second-level precision. Perfect for workouts, cooking, or work.',
        'feature.world.title': '150+ Global Cities',
        'feature.world.desc': 'View the time of over 150 cities around the world in real-time.',
        'feature.favorites.title': 'Favorite Cities',
        'feature.favorites.desc': 'Save your favorite cities for quick and immediate access.',
        'feature.theme.title': 'Light/Dark Theme',
        'feature.theme.desc': 'Switch between dark and light themes according to your preferences.',
        'feature.multilang.title': 'Multilingual',
        'feature.multilang.desc': 'Available in 5 languages: Italian, English, Spanish, French, and German.',
        'feature.responsive.title': 'Responsive Design',
        'feature.responsive.desc': 'Works perfectly on desktop, tablet, and smartphone.',
        
        // Timer Section
        'timer.title': '⏰ Timer',
        'timer.minutes': 'Minutes',
        'timer.seconds': 'Seconds',
        'timer.alarmSound': 'Alarm Sound',
        'timer.start': 'Start',
        'timer.pause': 'Pause',
        'timer.reset': 'Reset',
        'timer.running': 'Running...',
        'timer.resume': 'Resume',
        'timer.beep': '🔔 Classic Beep',
        'timer.bell': '🔔 Bell',
        'timer.digital': '📱 Digital',
        'timer.alarm': '⏰ Alarm',
        'timer.gentle': '🎵 Gentle',
        'timer.saved': 'Saved Timers',
        'timer.noSaved': 'No saved timers. Create your custom presets!',
        'timer.addPreset': 'Add Custom Timer',
        'timer.presetName': 'Timer Name',
        'timer.save': 'Save',
        'timer.cancel': 'Cancel',
        'timer.history': 'Timer History',
        'timer.noHistory': 'No completed timers yet',
        'timer.stats': 'Statistics',
        'timer.totalTimers': 'Completed Timers',
        'timer.totalTime': 'Total Time',
        'timer.avgTimer': 'Average Timer',
        'timer.longest': 'Longest Timer',
        
        // Quick Actions
        'quick.timer': 'Timer',
        'quick.worldclock': 'World Clock',
        'quick.settings': 'Settings',
        
        // Clock Section
        'clock.title': '🌐 World Clock',
        'clock.favorites': 'Favorites',
        'clock.noFavorites': 'No favorites. Click the star to save a city.',
        'clock.search': 'Search country or city...',
        'clock.allCities': 'All Cities',
        
        // Settings
        'settings.title': '⚙️ Settings',
        'settings.theme': 'Theme',
        'settings.darkMode': 'Dark Mode',
        'settings.language': 'Language',
        'settings.selectLanguage': 'Select Language',
        'settings.languageDesc': 'The selected language will be applied to the entire application.',
        'settings.timerSettings': 'Timer',
        'settings.soundNotifications': 'Sound notifications',
        'settings.autoRepeat': 'Auto-repeat timer',
        'settings.clockSettings': 'Clocks',
        'settings.format24': '24-hour format',
        'settings.showSeconds': 'Show seconds',
        'settings.data': 'Data',
        'settings.resetStats': '🗑️ Reset Statistics',
        'settings.resetStatsDesc': 'Reset the view counter to zero.',
        'settings.resetConfirm': 'Are you sure you want to reset the view statistics?',
        'settings.resetSuccess': '✅ Statistics reset successfully!',
        'settings.languageChanged': '✅ Language set to:',
        
        // Notification
        'notification.timerFinished': '⏰ Timer Finished!',
        'notification.timeUp': 'Time is up',
        
        // Footer
        'footer.rights': '© 2026 Abdul Time Clock. All rights reserved.',
        
        // Contact Section
        'contact.title': '📧 Contact',
        'contact.subtitle': 'Get in touch with us',
        'contact.description': 'Have questions, suggestions, or just want to say hello? We\'re here for you!',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.location': 'Location',
        'contact.sendEmail': 'Send Email',
        'contact.call': 'Call Us',
        'contact.viewMap': 'View Map',
        'contact.followUs': 'Follow Us on Social',
        'contact.formTitle': 'Send Us a Message',
        'contact.name': 'Name',
        'contact.emailLabel': 'Email',
        'contact.subject': 'Subject',
        'contact.message': 'Message',
        'contact.send': 'Send Message',
        
        // Footer
        'footer.rights': '© 2026 Abdul Time Clock. All rights reserved.',
        'footer.description': 'Your ultimate app to manage time intelligently and productively. Used by thousands of people worldwide.',
        'footer.quickLinks': 'Quick Links',
        'footer.features': 'Features',
        'footer.preciseTimer': 'Precise Timer',
        'footer.worldClock': 'World Clocks',
        'footer.multilang': 'Multilingual',
        'footer.favorites': 'Favorites',
        'footer.followUs': 'Follow Us',
        'footer.newsletter': 'Newsletter',
        'footer.newsletterDesc': 'Get updates and news',
        'footer.emailPlaceholder': 'Your email',
        'footer.version': 'v1.0.0',
        'footer.madeWith': 'Made with',
        'footer.in': 'in Italy',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.cookies': 'Cookie Policy',
        'footer.totalUsers': 'Total Users',
        'footer.timersRun': 'Timers Executed',
        'footer.cities': 'World Cities',
        'footer.rating': 'Rating',
        'footer.badge1': '100% Free',
        'footer.badge2': 'Safe & Private',
        
        // Header
        'header.online': 'Online'
    },
    es: {
        // Navbar
        'nav.home': 'Inicio',
        'nav.timer': 'Temporizador',
        'nav.clock': 'Reloj',
        'nav.settings': 'Configuración',
        'nav.contact': 'Contacto',
        
        // Hero Section
        'hero.title': 'Abdul Time Clock',
        'hero.subtitle': 'Tu aplicación para gestionar el tiempo de forma inteligente',
        'hero.startTimer': 'Iniciar Temporizador',
        'hero.viewClock': 'Ver Reloj',
        
        // Stats
        'stats.profileViews': 'Visualizaciones de Perfil',
        
        // Features
        'feature.timer.title': 'Temporizador Preciso',
        'feature.timer.desc': 'Configura temporizadores personalizados con precisión al segundo. Perfecto para entrenamientos, cocina o trabajo.',
        'feature.world.title': '150+ Ciudades Globales',
        'feature.world.desc': 'Visualiza la hora de más de 150 ciudades de todo el mundo en tiempo real.',
        'feature.favorites.title': 'Ciudades Favoritas',
        'feature.favorites.desc': 'Guarda tus ciudades favoritas para un acceso rápido e inmediato.',
        'feature.theme.title': 'Tema Claro/Oscuro',
        'feature.theme.desc': 'Cambia entre tema oscuro y claro según tus preferencias.',
        'feature.multilang.title': 'Multiidioma',
        'feature.multilang.desc': 'Disponible en 5 idiomas: Italiano, Inglés, Español, Francés y Alemán.',
        'feature.responsive.title': 'Diseño Responsivo',
        'feature.responsive.desc': 'Funciona perfectamente en escritorio, tablet y smartphone.',
        
        // Timer Section
        'timer.title': '⏰ Temporizador',
        'timer.minutes': 'Minutos',
        'timer.seconds': 'Segundos',
        'timer.alarmSound': 'Sonido de Alarma',
        'timer.start': 'Iniciar',
        'timer.pause': 'Pausa',
        'timer.reset': 'Reiniciar',
        'timer.running': 'En curso...',
        'timer.resume': 'Reanudar',
        'timer.beep': '🔔 Pitido Clásico',
        'timer.bell': '🔔 Campana',
        'timer.digital': '📱 Digital',
        'timer.alarm': '⏰ Alarma',
        'timer.gentle': '🎵 Suave',
        'timer.saved': 'Temporizadores Guardados',
        'timer.noSaved': 'Ningún temporizador guardado. ¡Crea tus presets personalizados!',
        'timer.addPreset': 'Añadir Temporizador Personalizado',
        'timer.presetName': 'Nombre del Temporizador',
        'timer.save': 'Guardar',
        'timer.cancel': 'Cancelar',
        'timer.history': 'Historial de Timer',
        'timer.noHistory': 'Ningún timer completado aún',
        'timer.stats': 'Estadísticas',
        'timer.totalTimers': 'Timers Completados',
        'timer.totalTime': 'Tiempo Total',
        'timer.avgTimer': 'Promedio Timer',
        'timer.longest': 'Timer Más Largo',
        
        // Quick Actions
        'quick.timer': 'Temporizador',
        'quick.worldclock': 'Reloj Mundial',
        'quick.settings': 'Configuración',
        
        // Clock Section
        'clock.title': '🌐 Reloj Mundial',
        'clock.favorites': 'Favoritos',
        'clock.noFavorites': 'Sin favoritos. Haz clic en la estrella para guardar una ciudad.',
        'clock.search': 'Buscar país o ciudad...',
        'clock.allCities': 'Todas las Ciudades',
        
        // Settings
        'settings.title': '⚙️ Configuración',
        'settings.theme': 'Tema',
        'settings.darkMode': 'Modo Oscuro',
        'settings.language': 'Idioma',
        'settings.selectLanguage': 'Seleccionar Idioma',
        'settings.languageDesc': 'El idioma seleccionado se aplicará a toda la aplicación.',
        'settings.timerSettings': 'Temporizador',
        'settings.soundNotifications': 'Notificaciones sonoras',
        'settings.autoRepeat': 'Repetir automáticamente',
        'settings.clockSettings': 'Relojes',
        'settings.format24': 'Formato 24 horas',
        'settings.showSeconds': 'Mostrar segundos',
        'settings.data': 'Datos',
        'settings.resetStats': '🗑️ Restablecer Estadísticas',
        'settings.resetStatsDesc': 'Restablecer el contador de visualizaciones a cero.',
        'settings.resetConfirm': '¿Estás seguro de que quieres restablecer las estadísticas?',
        'settings.resetSuccess': '✅ ¡Estadísticas restablecidas con éxito!',
        'settings.languageChanged': '✅ Idioma configurado en:',
        
        // Notification
        'notification.timerFinished': '⏰ ¡Temporizador Terminado!',
        'notification.timeUp': 'El tiempo ha terminado',
        
        // Footer
        'footer.rights': '© 2026 Abdul Time Clock. Todos los derechos reservados.',
        
        // Contact Section
        'contact.title': '📧 Contacto',
        'contact.subtitle': 'Ponte en contacto con nosotros',
        'contact.description': '¿Tienes preguntas, sugerencias o simplemente quieres saludar? ¡Estamos aquí para ti!',
        'contact.email': 'Email',
        'contact.phone': 'Teléfono',
        'contact.location': 'Ubicación',
        'contact.sendEmail': 'Enviar Email',
        'contact.call': 'Llámanos',
        'contact.viewMap': 'Ver Mapa',
        'contact.followUs': 'Síguenos en Redes',
        'contact.formTitle': 'Envíanos un Mensaje',
        'contact.name': 'Nombre',
        'contact.emailLabel': 'Email',
        'contact.subject': 'Asunto',
        'contact.message': 'Mensaje',
        'contact.send': 'Enviar Mensaje',
        
        // Footer
        'footer.rights': '© 2026 Abdul Time Clock. Todos los derechos reservados.',
        'footer.description': 'Tu app definitiva para gestionar el tiempo de forma inteligente y productiva. Usada por miles de personas en todo el mundo.',
        'footer.quickLinks': 'Enlaces Rápidos',
        'footer.features': 'Funcionalidades',
        'footer.preciseTimer': 'Temporizador Preciso',
        'footer.worldClock': 'Relojes Mundiales',
        'footer.multilang': 'Multiidioma',
        'footer.favorites': 'Favoritos',
        'footer.followUs': 'Síguenos',
        'footer.newsletter': 'Newsletter',
        'footer.newsletterDesc': 'Recibe actualizaciones y novedades',
        'footer.emailPlaceholder': 'Tu email',
        'footer.version': 'v1.0.0',
        'footer.madeWith': 'Hecho con',
        'footer.in': 'en Italia',
        'footer.privacy': 'Política de Privacidad',
        'footer.terms': 'Términos de Servicio',
        'footer.cookies': 'Política de Cookies',
        'footer.totalUsers': 'Usuarios Totales',
        'footer.timersRun': 'Temporizadores Ejecutados',
        'footer.cities': 'Ciudades Mundiales',
        'footer.rating': 'Calificación',
        'footer.badge1': '100% Gratis',
        'footer.badge2': 'Seguro y Privado',
        
        // Header
        'header.online': 'En línea'
    },
    fr: {
        // Navbar
        'nav.home': 'Accueil',
        'nav.timer': 'Minuteur',
        'nav.clock': 'Horloge',
        'nav.settings': 'Paramètres',
        
        // Hero Section
        'hero.title': 'Abdul Time Clock',
        'hero.subtitle': 'Votre application pour gérer le temps intelligemment',
        'hero.startTimer': 'Démarrer le Minuteur',
        'hero.viewClock': 'Voir l\'Horloge',
        
        // Stats
        'stats.profileViews': 'Vues du Profil',
        
        // Features
        'feature.timer.title': 'Minuteur Précis',
        'feature.timer.desc': 'Configurez des minuteurs personnalisés avec une précision à la seconde. Parfait pour l\'entraînement, la cuisine ou le travail.',
        'feature.world.title': '150+ Villes Mondiales',
        'feature.world.desc': 'Visualisez l\'heure de plus de 150 villes du monde entier en temps réel.',
        'feature.favorites.title': 'Villes Favorites',
        'feature.favorites.desc': 'Enregistrez vos villes préférées pour un accès rapide et immédiat.',
        'feature.theme.title': 'Thème Clair/Sombre',
        'feature.theme.desc': 'Passez du thème sombre au thème clair selon vos préférences.',
        'feature.multilang.title': 'Multilingue',
        'feature.multilang.desc': 'Disponible en 5 langues : Italien, Anglais, Espagnol, Français et Allemand.',
        'feature.responsive.title': 'Design Responsive',
        'feature.responsive.desc': 'Fonctionne parfaitement sur ordinateur, tablette et smartphone.',
        
        // Timer Section
        'timer.title': '⏰ Minuteur',
        'timer.minutes': 'Minutes',
        'timer.seconds': 'Secondes',
        'timer.alarmSound': 'Son d\'Alarme',
        'timer.start': 'Démarrer',
        'timer.pause': 'Pause',
        'timer.reset': 'Réinitialiser',
        'timer.running': 'En cours...',
        'timer.resume': 'Reprendre',
        'timer.beep': '🔔 Bip Classique',
        'timer.bell': '🔔 Cloche',
        'timer.digital': '📱 Numérique',
        'timer.alarm': '⏰ Alarme',
        'timer.gentle': '🎵 Doux',
        'timer.history': 'Historique des Minuteurs',
        'timer.noHistory': 'Aucun minuteur terminé pour le moment',
        'timer.stats': 'Statistiques',
        'timer.totalTimers': 'Minuteurs Terminés',
        'timer.totalTime': 'Temps Total',
        'timer.avgTimer': 'Minuteur Moyen',
        'timer.longest': 'Minuteur Le Plus Long',
        
        // Quick Actions
        'quick.timer': 'Minuteur',
        'quick.worldclock': 'Horloge Mondiale',
        'quick.settings': 'Paramètres',
        
        // Clock Section
        'clock.title': '🌐 Horloge Mondiale',
        'clock.favorites': 'Favoris',
        'clock.noFavorites': 'Aucun favori. Cliquez sur l\'étoile pour enregistrer une ville.',
        'clock.search': 'Rechercher un pays ou une ville...',
        'clock.allCities': 'Toutes les Villes',
        
        // Settings
        'settings.title': '⚙️ Paramètres',
        'settings.theme': 'Thème',
        'settings.darkMode': 'Mode Sombre',
        'settings.language': 'Langue',
        'settings.selectLanguage': 'Sélectionner la Langue',
        'settings.languageDesc': 'La langue sélectionnée sera appliquée à toute l\'application.',
        'settings.timerSettings': 'Minuteur',
        'settings.soundNotifications': 'Notifications sonores',
        'settings.autoRepeat': 'Répétition automatique',
        'settings.clockSettings': 'Horloges',
        'settings.format24': 'Format 24 heures',
        'settings.showSeconds': 'Afficher les secondes',
        'settings.data': 'Données',
        'settings.resetStats': '🗑️ Réinitialiser les Statistiques',
        'settings.resetStatsDesc': 'Réinitialiser le compteur de vues à zéro.',
        'settings.resetConfirm': 'Êtes-vous sûr de vouloir réinitialiser les statistiques?',
        'settings.resetSuccess': '✅ Statistiques réinitialisées avec succès!',
        'settings.languageChanged': '✅ Langue définie sur:',
        
        // Notification
        'notification.timerFinished': '⏰ Minuteur Terminé!',
        'notification.timeUp': 'Le temps est écoulé',
        
        // Footer
        'footer.rights': '© 2026 Abdul Time Clock. Tous droits réservés.',
        'footer.description': 'Votre application ultime pour gérer le temps intelligemment et productivement. Utilisée par des milliers de personnes dans le monde.',
        'footer.quickLinks': 'Liens Rapides',
        'footer.features': 'Fonctionnalités',
        'footer.preciseTimer': 'Minuteur Précis',
        'footer.worldClock': 'Horloges Mondiales',
        'footer.multilang': 'Multilingue',
        'footer.favorites': 'Favoris',
        'footer.followUs': 'Suivez-nous',
        'footer.newsletter': 'Newsletter',
        'footer.newsletterDesc': 'Recevez les mises à jour et nouveautés',
        'footer.emailPlaceholder': 'Votre email',
        'footer.version': 'v1.0.0',
        'footer.madeWith': 'Fait avec',
        'footer.in': 'en Italie',
        'footer.privacy': 'Politique de Confidentialité',
        'footer.terms': 'Conditions de Service',
        'footer.cookies': 'Politique des Cookies',
        'footer.totalUsers': 'Utilisateurs Totaux',
        'footer.timersRun': 'Minuteurs Exécutés',
        'footer.cities': 'Villes Mondiales',
        'footer.rating': 'Évaluation',
        'footer.badge1': '100% Gratuit',
        'footer.badge2': 'Sûr et Privé',
        
        // Header
        'header.online': 'En ligne'
    },
    de: {
        // Navbar
        'nav.home': 'Startseite',
        'nav.timer': 'Timer',
        'nav.clock': 'Uhr',
        'nav.settings': 'Einstellungen',
        
        // Hero Section
        'hero.title': 'Abdul Time Clock',
        'hero.subtitle': 'Ihre Anwendung zur intelligenten Zeitverwaltung',
        'hero.startTimer': 'Timer Starten',
        'hero.viewClock': 'Uhr Anzeigen',
        
        // Stats
        'stats.profileViews': 'Profilaufrufe',
        
        // Features
        'feature.timer.title': 'Präziser Timer',
        'feature.timer.desc': 'Stellen Sie benutzerdefinierte Timer mit sekundgenauer Präzision ein. Perfekt für Training, Kochen oder Arbeit.',
        'feature.world.title': '150+ Weltstädte',
        'feature.world.desc': 'Zeigen Sie die Uhrzeit von über 150 Städten weltweit in Echtzeit an.',
        'feature.favorites.title': 'Lieblingsstädte',
        'feature.favorites.desc': 'Speichern Sie Ihre Lieblingsstädte für schnellen und sofortigen Zugriff.',
        'feature.theme.title': 'Helles/Dunkles Thema',
        'feature.theme.desc': 'Wechseln Sie je nach Präferenz zwischen dunklem und hellem Thema.',
        'feature.multilang.title': 'Mehrsprachig',
        'feature.multilang.desc': 'Verfügbar in 5 Sprachen: Italienisch, Englisch, Spanisch, Französisch und Deutsch.',
        'feature.responsive.title': 'Responsives Design',
        'feature.responsive.desc': 'Funktioniert perfekt auf Desktop, Tablet und Smartphone.',
        
        // Timer Section
        'timer.title': '⏰ Timer',
        'timer.minutes': 'Minuten',
        'timer.seconds': 'Sekunden',
        'timer.alarmSound': 'Alarmton',
        'timer.start': 'Start',
        'timer.pause': 'Pause',
        'timer.reset': 'Zurücksetzen',
        'timer.running': 'Läuft...',
        'timer.resume': 'Fortsetzen',
        'timer.beep': '🔔 Klassischer Piepton',
        'timer.bell': '🔔 Glocke',
        'timer.digital': '📱 Digital',
        'timer.alarm': '⏰ Alarm',
        'timer.gentle': '🎵 Sanft',
        'timer.history': 'Timer-Verlauf',
        'timer.noHistory': 'Noch keine Timer abgeschlossen',
        'timer.stats': 'Statistiken',
        'timer.totalTimers': 'Abgeschlossene Timer',
        'timer.totalTime': 'Gesamtzeit',
        'timer.avgTimer': 'Durchschnittlicher Timer',
        'timer.longest': 'Längster Timer',
        
        // Quick Actions
        'quick.timer': 'Timer',
        'quick.worldclock': 'Weltuhr',
        'quick.settings': 'Einstellungen',
        
        // Clock Section
        'clock.title': '🌐 Weltuhr',
        'clock.favorites': 'Favoriten',
        'clock.noFavorites': 'Keine Favoriten. Klicken Sie auf den Stern, um eine Stadt zu speichern.',
        'clock.search': 'Land oder Stadt suchen...',
        'clock.allCities': 'Alle Städte',
        
        // Settings
        'settings.title': '⚙️ Einstellungen',
        'settings.theme': 'Thema',
        'settings.darkMode': 'Dunkler Modus',
        'settings.language': 'Sprache',
        'settings.selectLanguage': 'Sprache Auswählen',
        'settings.languageDesc': 'Die ausgewählte Sprache wird auf die gesamte Anwendung angewendet.',
        'settings.timerSettings': 'Timer',
        'settings.soundNotifications': 'Ton-Benachrichtigungen',
        'settings.autoRepeat': 'Automatisch wiederholen',
        'settings.clockSettings': 'Uhren',
        'settings.format24': '24-Stunden-Format',
        'settings.showSeconds': 'Sekunden anzeigen',
        'settings.data': 'Daten',
        'settings.resetStats': '🗑️ Statistiken Zurücksetzen',
        'settings.resetStatsDesc': 'Ansichtszähler auf Null zurücksetzen.',
        'settings.resetConfirm': 'Möchten Sie die Statistiken wirklich zurücksetzen?',
        'settings.resetSuccess': '✅ Statistiken erfolgreich zurückgesetzt!',
        'settings.languageChanged': '✅ Sprache eingestellt auf:',
        
        // Notification
        'notification.timerFinished': '⏰ Timer Beendet!',
        'notification.timeUp': 'Die Zeit ist abgelaufen',
        
        // Footer
        'footer.rights': '© 2026 Abdul Time Clock. Alle Rechte vorbehalten.',
        'footer.description': 'Ihre ultimative App zur intelligenten und produktiven Zeitverwaltung. Von Tausenden Menschen weltweit genutzt.',
        'footer.quickLinks': 'Schnellzugriff',
        'footer.features': 'Funktionen',
        'footer.preciseTimer': 'Präziser Timer',
        'footer.worldClock': 'Weltuhren',
        'footer.multilang': 'Mehrsprachig',
        'footer.favorites': 'Favoriten',
        'footer.followUs': 'Folgen Sie uns',
        'footer.newsletter': 'Newsletter',
        'footer.newsletterDesc': 'Erhalten Sie Updates und Neuigkeiten',
        'footer.emailPlaceholder': 'Ihre E-Mail',
        'footer.version': 'v1.0.0',
        'footer.madeWith': 'Gemacht mit',
        'footer.in': 'in Italien',
        'footer.privacy': 'Datenschutzrichtlinie',
        'footer.terms': 'Nutzungsbedingungen',
        'footer.cookies': 'Cookie-Richtlinie',
        'footer.totalUsers': 'Gesamtnutzer',
        'footer.timersRun': 'Ausgeführte Timer',
        'footer.cities': 'Weltstädte',
        'footer.rating': 'Bewertung',
        'footer.badge1': '100% Kostenlos',
        'footer.badge2': 'Sicher & Privat',
        
        // Header
        'header.online': 'Online'
    }
};

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' && el.type === 'text') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Function to navigate to section
    function navigateToSection(targetId) {
        // Update active link in navbar
        navLinks.forEach(l => l.classList.remove('active'));
        const targetLink = document.querySelector(`.nav-link[href="#${targetId}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }
        
        // Show target section
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });

        // Close mobile menu
        navMenu.classList.remove('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Check if there's a hash in URL on page load (e.g., index.html#timer)
    const hash = window.location.hash;
    if (hash) {
        const targetId = hash.substring(1); // Remove the # symbol
        if (targetId && document.getElementById(targetId)) {
            // Small delay to ensure page is fully loaded
            setTimeout(() => {
                navigateToSection(targetId);
            }, 100);
        }
    }

    // Navigation links in navbar
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            console.log('Link cliccato:', href); // Debug log
            
            // Se il link è esterno (non inizia con #), lascia che il browser lo gestisca normalmente
            if (!href.startsWith('#')) {
                console.log('Link esterno rilevato, navigazione normale'); // Debug log
                return; // Non fare preventDefault, permetti la navigazione normale
            }
            
            // Altrimenti, gestisci la navigazione interna
            console.log('Link interno rilevato, gestisco con JS'); // Debug log
            e.preventDefault();
            const targetId = href.substring(1);
            navigateToSection(targetId);
        });
    });

    // Hero buttons (Avvia Timer, Vedi Orario)
    document.querySelectorAll('.hero-buttons a').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('href').substring(1);
            navigateToSection(targetId);
        });
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Settings button
    const settingsBtn = document.getElementById('settings-btn');
    const settingsPanel = document.getElementById('settings-panel');
    const settingsClose = document.getElementById('settings-close');
    const settingsOverlay = document.getElementById('settings-overlay');

    if (settingsBtn && settingsPanel) {
        // Apri pannello impostazioni
        settingsBtn.addEventListener('click', () => {
            settingsPanel.classList.add('active');
            document.body.style.overflow = 'hidden'; // Blocca scroll
        });

        // Chiudi pannello con X
        if (settingsClose) {
            settingsClose.addEventListener('click', () => {
                settingsPanel.classList.remove('active');
                document.body.style.overflow = ''; // Ripristina scroll
            });
        }

        // Chiudi pannello cliccando sull'overlay
        if (settingsOverlay) {
            settingsOverlay.addEventListener('click', () => {
                settingsPanel.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Chiudi con tasto ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && settingsPanel.classList.contains('active')) {
                settingsPanel.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Reset statistiche
    const resetStatsBtn = document.getElementById('reset-stats');
    if (resetStatsBtn) {
        resetStatsBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('selectedLanguage') || 'it';
            const confirmMsg = translations[currentLang]['settings.resetConfirm'];
            const successMsg = translations[currentLang]['settings.resetSuccess'];
            
            if (confirm(confirmMsg)) {
                localStorage.removeItem('profileViews');
                const profileViewsEl = document.getElementById('profile-views');
                if (profileViewsEl) {
                    profileViewsEl.textContent = '0';
                }
                alert(successMsg);
            }
        });
    }

    // Gestione cambio lingua
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        // Carica lingua salvata
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'it';
        languageSelect.value = savedLanguage;

        // Gestisci cambio lingua
        languageSelect.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            localStorage.setItem('selectedLanguage', selectedLang);
            
            // Applica immediatamente la traduzione
            translatePage(selectedLang);
            
            // Mostra messaggio di conferma
            const languageNames = {
                'it': 'Italiano',
                'en': 'English',
                'es': 'Español',
                'fr': 'Français',
                'de': 'Deutsch',
                'pt': 'Português',
                'ru': 'Русский',
                'zh': '中文',
                'ja': '日本語',
                'ar': 'العربية'
            };
            
            const message = translations[selectedLang]['settings.languageChanged'] || '✅ Language set to:';
            alert(`${message} ${languageNames[selectedLang]}`);
        });
    }

    // Gestione modalità scura/chiara
    const darkModeToggle = document.getElementById('dark-mode');
    if (darkModeToggle) {
        // Carica preferenza salvata
        const isDarkMode = localStorage.getItem('darkMode') !== 'false';
        darkModeToggle.checked = isDarkMode;
        
        // Applica tema iniziale
        if (!isDarkMode) {
            document.body.classList.add('light-theme');
        }

        // Gestisci cambio tema
        darkModeToggle.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            localStorage.setItem('darkMode', isChecked);
            
            if (isChecked) {
                document.body.classList.remove('light-theme');
            } else {
                document.body.classList.add('light-theme');
            }
        });
    }

    // Initialize all functionalities
    initializeTimer();
    initializeClocks();
    initializeStats();
    initializeHomeTime();
    
    // Gestione frecce input timer
    document.querySelectorAll('.arrow-up, .arrow-down').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (!input) return;
            
            const currentValue = parseInt(input.value) || 0;
            const max = parseInt(input.max) || 59;
            const min = parseInt(input.min) || 0;
            
            if (btn.classList.contains('arrow-up')) {
                input.value = currentValue >= max ? min : currentValue + 1;
            } else {
                input.value = currentValue <= min ? max : currentValue - 1;
            }
        });
    });
    
    // Applica lingua salvata
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'it';
    translatePage(savedLanguage);
});

// ===== TIMER FUNCTIONALITY =====
function initializeTimer() {
    let timerInterval = null;
    let timeRemaining = 0;
    let isPaused = false;

    const timerDisplay = document.getElementById('timer-display');
    const minutesInput = document.getElementById('timer-minutes');
    const secondsInput = document.getElementById('timer-seconds');
    const startBtn = document.getElementById('start-timer');
    const pauseBtn = document.getElementById('pause-timer');
    const resetBtn = document.getElementById('reset-timer');
    const presetBtns = document.querySelectorAll('.preset-btn');

    // Preset buttons
    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const totalSeconds = parseInt(btn.dataset.time);
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            minutesInput.value = minutes;
            secondsInput.value = seconds;
        });
    });

    // Start timer
    startBtn.addEventListener('click', () => {
        if (timerInterval && !isPaused) {
            return; // Timer already running
        }

        if (!isPaused) {
            const minutes = parseInt(minutesInput.value) || 0;
            const seconds = parseInt(secondsInput.value) || 0;
            timeRemaining = minutes * 60 + seconds;
        }

        if (timeRemaining <= 0) {
            return;
        }

        isPaused = false;
        startBtn.textContent = 'In corso...';
        startBtn.disabled = true;

        timerInterval = setInterval(() => {
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                startBtn.textContent = 'Avvia';
                startBtn.disabled = false;
                
                // Play alarm and show notification
                playAlarmSound();
                showNotification();
                
                // Save to history
                saveTimerToHistory(minutes * 60 + seconds);
                updateTimerStats();
                
                // Reset display
                updateTimerDisplay(0, 0);
                return;
            }

            timeRemaining--;
            const mins = Math.floor(timeRemaining / 60);
            const secs = timeRemaining % 60;
            updateTimerDisplay(mins, secs);
        }, 1000);
    });

    // Pause timer
    pauseBtn.addEventListener('click', () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
            isPaused = true;
            startBtn.textContent = 'Riprendi';
            startBtn.disabled = false;
        }
    });

    // Reset timer
    resetBtn.addEventListener('click', () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        timeRemaining = 0;
        isPaused = false;
        startBtn.textContent = 'Avvia';
        startBtn.disabled = false;
        updateTimerDisplay(0, 0);
        minutesInput.value = 0;
        secondsInput.value = 30;
    });

    function updateTimerDisplay(minutes, seconds) {
        const timeParts = timerDisplay.querySelectorAll('.time-part');
        timeParts[0].textContent = minutes.toString().padStart(2, '0');
        timeParts[1].textContent = seconds.toString().padStart(2, '0');
    }
}

// ===== WORLD CLOCKS =====
function initializeClocks() {
    // Lista completa di città e paesi del mondo con fusi orari (in ordine alfabetico)
    const worldCities = [
        { name: 'Ghana', city: 'Accra', flag: '🇬🇭', timezone: 'Africa/Accra', abbr: 'GMT' },
        { name: 'Etiopia', city: 'Addis Abeba', flag: '🇪🇹', timezone: 'Africa/Addis_Ababa', abbr: 'EAT' },
        { name: 'Kazakistan', city: 'Almaty', flag: '🇰🇿', timezone: 'Asia/Almaty', abbr: 'ALMT' },
        { name: 'Giordania', city: 'Amman', flag: '🇯🇴', timezone: 'Asia/Amman', abbr: 'EET' },
        { name: 'Paesi Bassi', city: 'Amsterdam', flag: '🇳🇱', timezone: 'Europe/Amsterdam', abbr: 'CET' },
        { name: 'Alaska (USA)', city: 'Anchorage', flag: '🇺🇸', timezone: 'America/Anchorage', abbr: 'AKST' },
        { name: 'Turchia', city: 'Ankara', flag: '🇹🇷', timezone: 'Europe/Istanbul', abbr: 'TRT' },
        { name: 'Madagascar', city: 'Antananarivo', flag: '🇲🇬', timezone: 'Indian/Antananarivo', abbr: 'EAT' },
        { name: 'Samoa Americane', city: 'Apia', flag: '🇼🇸', timezone: 'Pacific/Apia', abbr: 'WST' },
        { name: 'Turkmenistan', city: 'Ashgabat', flag: '🇹🇲', timezone: 'Asia/Ashgabat', abbr: 'TMT' },
        { name: 'Paraguay', city: 'Asunción', flag: '🇵🇾', timezone: 'America/Asuncion', abbr: 'PYT' },
        { name: 'Grecia', city: 'Atene', flag: '🇬🇷', timezone: 'Europe/Athens', abbr: 'EET' },
        { name: 'Georgia (USA)', city: 'Atlanta', flag: '🇺🇸', timezone: 'America/New_York', abbr: 'EST' },
        { name: 'Nuova Zelanda', city: 'Auckland', flag: '🇳🇿', timezone: 'Pacific/Auckland', abbr: 'NZDT' },
        { name: 'Iraq', city: 'Baghdad', flag: '🇮🇶', timezone: 'Asia/Baghdad', abbr: 'AST' },
        { name: 'Azerbaigian', city: 'Baku', flag: '🇦🇿', timezone: 'Asia/Baku', abbr: 'AZT' },
        { name: 'Indonesia', city: 'Bali', flag: '🇮🇩', timezone: 'Asia/Makassar', abbr: 'WITA' },
        { name: 'Thailandia', city: 'Bangkok', flag: '🇹🇭', timezone: 'Asia/Bangkok', abbr: 'ICT' },
        { name: 'Cina', city: 'Pechino', flag: '🇨🇳', timezone: 'Asia/Shanghai', abbr: 'CST' },
        { name: 'Libano', city: 'Beirut', flag: '🇱🇧', timezone: 'Asia/Beirut', abbr: 'EET' },
        { name: 'Serbia', city: 'Belgrado', flag: '🇷🇸', timezone: 'Europe/Belgrade', abbr: 'CET' },
        { name: 'Germania', city: 'Berlino', flag: '🇩🇪', timezone: 'Europe/Berlin', abbr: 'CET' },
        { name: 'Svizzera', city: 'Berna', flag: '🇨🇭', timezone: 'Europe/Zurich', abbr: 'CET' },
        { name: 'Colombia', city: 'Bogotá', flag: '🇨🇴', timezone: 'America/Bogota', abbr: 'COT' },
        { name: 'India', city: 'Bombay', flag: '🇮🇳', timezone: 'Asia/Kolkata', abbr: 'IST' },
        { name: 'Brasile', city: 'Brasilia', flag: '🇧🇷', timezone: 'America/Sao_Paulo', abbr: 'BRT' },
        { name: 'Slovacchia', city: 'Bratislava', flag: '🇸🇰', timezone: 'Europe/Bratislava', abbr: 'CET' },
        { name: 'Belgio', city: 'Bruxelles', flag: '🇧🇪', timezone: 'Europe/Brussels', abbr: 'CET' },
        { name: 'Romania', city: 'Bucarest', flag: '🇷🇴', timezone: 'Europe/Bucharest', abbr: 'EET' },
        { name: 'Ungheria', city: 'Budapest', flag: '🇭🇺', timezone: 'Europe/Budapest', abbr: 'CET' },
        { name: 'Argentina', city: 'Buenos Aires', flag: '🇦🇷', timezone: 'America/Argentina/Buenos_Aires', abbr: 'ART' },
        { name: 'Egitto', city: 'Il Cairo', flag: '🇪🇬', timezone: 'Africa/Cairo', abbr: 'EET' },
        { name: 'India', city: 'Calcutta', flag: '🇮🇳', timezone: 'Asia/Kolkata', abbr: 'IST' },
        { name: 'Canada', city: 'Calgary', flag: '🇨🇦', timezone: 'America/Edmonton', abbr: 'MST' },
        { name: 'Australia', city: 'Canberra', flag: '🇦🇺', timezone: 'Australia/Sydney', abbr: 'AEDT' },
        { name: 'Sudafrica', city: 'Città del Capo', flag: '🇿🇦', timezone: 'Africa/Johannesburg', abbr: 'SAST' },
        { name: 'Venezuela', city: 'Caracas', flag: '🇻🇪', timezone: 'America/Caracas', abbr: 'VET' },
        { name: 'Marocco', city: 'Casablanca', flag: '🇲🇦', timezone: 'Africa/Casablanca', abbr: 'WET' },
        { name: 'Illinois (USA)', city: 'Chicago', flag: '🇺🇸', timezone: 'America/Chicago', abbr: 'CST' },
        { name: 'Moldavia', city: 'Chișinău', flag: '🇲🇩', timezone: 'Europe/Chisinau', abbr: 'EET' },
        { name: 'Sri Lanka', city: 'Colombo', flag: '🇱🇰', timezone: 'Asia/Colombo', abbr: 'IST' },
        { name: 'Danimarca', city: 'Copenaghen', flag: '🇩🇰', timezone: 'Europe/Copenhagen', abbr: 'CET' },
        { name: 'Siria', city: 'Damasco', flag: '🇸🇾', timezone: 'Asia/Damascus', abbr: 'EET' },
        { name: 'Tanzania', city: 'Dar es Salaam', flag: '🇹🇿', timezone: 'Africa/Dar_es_Salaam', abbr: 'EAT' },
        { name: 'Colorado (USA)', city: 'Denver', flag: '🇺🇸', timezone: 'America/Denver', abbr: 'MST' },
        { name: 'Bangladesh', city: 'Dacca', flag: '🇧🇩', timezone: 'Asia/Dhaka', abbr: 'BST' },
        { name: 'Senegal', city: 'Dakar', flag: '🇸🇳', timezone: 'Africa/Dakar', abbr: 'GMT' },
        { name: 'Emirati Arabi', city: 'Dubai', flag: '🇦🇪', timezone: 'Asia/Dubai', abbr: 'GST' },
        { name: 'Irlanda', city: 'Dublino', flag: '🇮🇪', timezone: 'Europe/Dublin', abbr: 'GMT' },
        { name: 'Tagikistan', city: 'Dushanbe', flag: '🇹🇯', timezone: 'Asia/Dushanbe', abbr: 'TJT' },
        { name: 'Scozia (UK)', city: 'Edimburgo', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', timezone: 'Europe/London', abbr: 'GMT' },
        { name: 'Canada', city: 'Edmonton', flag: '🇨🇦', timezone: 'America/Edmonton', abbr: 'MST' },
        { name: 'Eritrea', city: 'Asmara', flag: '🇪🇷', timezone: 'Africa/Asmara', abbr: 'EAT' },
        { name: 'Guatemala', city: 'Guatemala City', flag: '🇬🇹', timezone: 'America/Guatemala', abbr: 'CST' },
        { name: 'Vietnam', city: 'Hanoi', flag: '🇻🇳', timezone: 'Asia/Ho_Chi_Minh', abbr: 'ICT' },
        { name: 'Zimbabwe', city: 'Harare', flag: '🇿🇼', timezone: 'Africa/Harare', abbr: 'CAT' },
        { name: 'Cuba', city: 'L\'Avana', flag: '🇨🇺', timezone: 'America/Havana', abbr: 'CST' },
        { name: 'Finlandia', city: 'Helsinki', flag: '🇫🇮', timezone: 'Europe/Helsinki', abbr: 'EET' },
        { name: 'Vietnam', city: 'Ho Chi Minh', flag: '🇻🇳', timezone: 'Asia/Ho_Chi_Minh', abbr: 'ICT' },
        { name: 'Hong Kong', city: 'Hong Kong', flag: '🇭🇰', timezone: 'Asia/Hong_Kong', abbr: 'HKT' },
        { name: 'Hawaii (USA)', city: 'Honolulu', flag: '🇺🇸', timezone: 'Pacific/Honolulu', abbr: 'HST' },
        { name: 'Texas (USA)', city: 'Houston', flag: '🇺🇸', timezone: 'America/Chicago', abbr: 'CST' },
        { name: 'Mongolia', city: 'Ulan Bator', flag: '🇲🇳', timezone: 'Asia/Ulaanbaatar', abbr: 'ULAT' },
        { name: 'Pakistan', city: 'Islamabad', flag: '🇵🇰', timezone: 'Asia/Karachi', abbr: 'PKT' },
        { name: 'Turchia', city: 'Istanbul', flag: '🇹🇷', timezone: 'Europe/Istanbul', abbr: 'TRT' },
        { name: 'Indonesia', city: 'Jakarta', flag: '🇮🇩', timezone: 'Asia/Jakarta', abbr: 'WIB' },
        { name: 'Palestina', city: 'Gerusalemme', flag: '🇵🇸', timezone: 'Asia/Jerusalem', abbr: 'IST' },
        { name: 'Sudafrica', city: 'Johannesburg', flag: '🇿🇦', timezone: 'Africa/Johannesburg', abbr: 'SAST' },
        { name: 'Afghanistan', city: 'Kabul', flag: '🇦🇫', timezone: 'Asia/Kabul', abbr: 'AFT' },
        { name: 'Uganda', city: 'Kampala', flag: '🇺🇬', timezone: 'Africa/Kampala', abbr: 'EAT' },
        { name: 'Nepal', city: 'Kathmandu', flag: '🇳🇵', timezone: 'Asia/Kathmandu', abbr: 'NPT' },
        { name: 'Pakistan', city: 'Karachi', flag: '🇵🇰', timezone: 'Asia/Karachi', abbr: 'PKT' },
        { name: 'Ucraina', city: 'Kiev', flag: '🇺🇦', timezone: 'Europe/Kiev', abbr: 'EET' },
        { name: 'Rwanda', city: 'Kigali', flag: '🇷🇼', timezone: 'Africa/Kigali', abbr: 'CAT' },
        { name: 'Giamaica', city: 'Kingston', flag: '🇯🇲', timezone: 'America/Jamaica', abbr: 'EST' },
        { name: 'Rep. Dem. Congo', city: 'Kinshasa', flag: '🇨🇩', timezone: 'Africa/Kinshasa', abbr: 'WAT' },
        { name: 'Malaysia', city: 'Kuala Lumpur', flag: '🇲🇾', timezone: 'Asia/Kuala_Lumpur', abbr: 'MYT' },
        { name: 'Kuwait', city: 'Kuwait City', flag: '🇰🇼', timezone: 'Asia/Kuwait', abbr: 'AST' },
        { name: 'Kirghizistan', city: 'Bishkek', flag: '🇰🇬', timezone: 'Asia/Bishkek', abbr: 'KGT' },
        { name: 'Bolivia', city: 'La Paz', flag: '🇧🇴', timezone: 'America/La_Paz', abbr: 'BOT' },
        { name: 'Nigeria', city: 'Lagos', flag: '🇳🇬', timezone: 'Africa/Lagos', abbr: 'WAT' },
        { name: 'Pakistan', city: 'Lahore', flag: '🇵🇰', timezone: 'Asia/Karachi', abbr: 'PKT' },
        { name: 'Nevada (USA)', city: 'Las Vegas', flag: '🇺🇸', timezone: 'America/Los_Angeles', abbr: 'PST' },
        { name: 'Perù', city: 'Lima', flag: '🇵🇪', timezone: 'America/Lima', abbr: 'PET' },
        { name: 'Portogallo', city: 'Lisbona', flag: '🇵🇹', timezone: 'Europe/Lisbon', abbr: 'WET' },
        { name: 'Slovenia', city: 'Lubiana', flag: '🇸🇮', timezone: 'Europe/Ljubljana', abbr: 'CET' },
        { name: 'Zambia', city: 'Lusaka', flag: '🇿🇲', timezone: 'Africa/Lusaka', abbr: 'CAT' },
        { name: 'Lussemburgo', city: 'Lussemburgo', flag: '🇱🇺', timezone: 'Europe/Luxembourg', abbr: 'CET' },
        { name: 'Regno Unito', city: 'Londra', flag: '🇬🇧', timezone: 'Europe/London', abbr: 'GMT' },
        { name: 'California (USA)', city: 'Los Angeles', flag: '🇺🇸', timezone: 'America/Los_Angeles', abbr: 'PST' },
        { name: 'Spagna', city: 'Madrid', flag: '🇪🇸', timezone: 'Europe/Madrid', abbr: 'CET' },
        { name: 'Filippine', city: 'Manila', flag: '🇵🇭', timezone: 'Asia/Manila', abbr: 'PHT' },
        { name: 'Mozambico', city: 'Maputo', flag: '🇲🇿', timezone: 'Africa/Maputo', abbr: 'CAT' },
        { name: 'Australia', city: 'Melbourne', flag: '🇦🇺', timezone: 'Australia/Melbourne', abbr: 'AEDT' },
        { name: 'Florida (USA)', city: 'Miami', flag: '🇺🇸', timezone: 'America/New_York', abbr: 'EST' },
        { name: 'Italia', city: 'Milano', flag: '🇮🇹', timezone: 'Europe/Rome', abbr: 'CET' },
        { name: 'Bielorussia', city: 'Minsk', flag: '🇧🇾', timezone: 'Europe/Minsk', abbr: 'MSK' },
        { name: 'Uruguay', city: 'Montevideo', flag: '🇺🇾', timezone: 'America/Montevideo', abbr: 'UYT' },
        { name: 'Canada', city: 'Montreal', flag: '🇨🇦', timezone: 'America/Toronto', abbr: 'EST' },
        { name: 'Russia', city: 'Mosca', flag: '🇷🇺', timezone: 'Europe/Moscow', abbr: 'MSK' },
        { name: 'Kenya', city: 'Nairobi', flag: '🇰🇪', timezone: 'Africa/Nairobi', abbr: 'EAT' },
        { name: 'Bahamas', city: 'Nassau', flag: '🇧🇸', timezone: 'America/Nassau', abbr: 'EST' },
        { name: 'India', city: 'Nuova Delhi', flag: '🇮🇳', timezone: 'Asia/Kolkata', abbr: 'IST' },
        { name: 'New York (USA)', city: 'New York', flag: '🇺🇸', timezone: 'America/New_York', abbr: 'EST' },
        { name: 'Cipro', city: 'Nicosia', flag: '🇨🇾', timezone: 'Asia/Nicosia', abbr: 'EET' },
        { name: 'Norvegia', city: 'Oslo', flag: '🇳🇴', timezone: 'Europe/Oslo', abbr: 'CET' },
        { name: 'Canada', city: 'Ottawa', flag: '🇨🇦', timezone: 'America/Toronto', abbr: 'EST' },
        { name: 'Francia', city: 'Parigi', flag: '🇫🇷', timezone: 'Europe/Paris', abbr: 'CET' },
        { name: 'Australia', city: 'Perth', flag: '🇦🇺', timezone: 'Australia/Perth', abbr: 'AWST' },
        { name: 'Pennsylvania (USA)', city: 'Philadelphia', flag: '🇺🇸', timezone: 'America/New_York', abbr: 'EST' },
        { name: 'Cambogia', city: 'Phnom Penh', flag: '🇰🇭', timezone: 'Asia/Phnom_Penh', abbr: 'ICT' },
        { name: 'Arizona (USA)', city: 'Phoenix', flag: '🇺🇸', timezone: 'America/Phoenix', abbr: 'MST' },
        { name: 'Cechia', city: 'Praga', flag: '🇨🇿', timezone: 'Europe/Prague', abbr: 'CET' },
        { name: 'Sudafrica', city: 'Pretoria', flag: '🇿🇦', timezone: 'Africa/Johannesburg', abbr: 'SAST' },
        { name: 'Ecuador', city: 'Quito', flag: '🇪🇨', timezone: 'America/Guayaquil', abbr: 'ECT' },
        { name: 'Islanda', city: 'Reykjavik', flag: '🇮🇸', timezone: 'Atlantic/Reykjavik', abbr: 'GMT' },
        { name: 'Lettonia', city: 'Riga', flag: '🇱🇻', timezone: 'Europe/Riga', abbr: 'EET' },
        { name: 'Brasile', city: 'Rio de Janeiro', flag: '🇧🇷', timezone: 'America/Sao_Paulo', abbr: 'BRT' },
        { name: 'Arabia Saudita', city: 'Riyadh', flag: '🇸🇦', timezone: 'Asia/Riyadh', abbr: 'AST' },
        { name: 'Italia', city: 'Roma', flag: '🇮🇹', timezone: 'Europe/Rome', abbr: 'CET' },
        { name: 'California (USA)', city: 'San Francisco', flag: '🇺🇸', timezone: 'America/Los_Angeles', abbr: 'PST' },
        { name: 'Costa Rica', city: 'San José', flag: '🇨🇷', timezone: 'America/Costa_Rica', abbr: 'CST' },
        { name: 'Brasile', city: 'San Paolo', flag: '🇧🇷', timezone: 'America/Sao_Paulo', abbr: 'BRT' },
        { name: 'Cile', city: 'Santiago', flag: '🇨🇱', timezone: 'America/Santiago', abbr: 'CLT' },
        { name: 'Rep. Dominicana', city: 'Santo Domingo', flag: '🇩🇴', timezone: 'America/Santo_Domingo', abbr: 'AST' },
        { name: 'Washington (USA)', city: 'Seattle', flag: '🇺🇸', timezone: 'America/Los_Angeles', abbr: 'PST' },
        { name: 'Corea del Sud', city: 'Seoul', flag: '🇰🇷', timezone: 'Asia/Seoul', abbr: 'KST' },
        { name: 'Cina', city: 'Shanghai', flag: '🇨🇳', timezone: 'Asia/Shanghai', abbr: 'CST' },
        { name: 'Singapore', city: 'Singapore', flag: '🇸🇬', timezone: 'Asia/Singapore', abbr: 'SGT' },
        { name: 'Bulgaria', city: 'Sofia', flag: '🇧🇬', timezone: 'Europe/Sofia', abbr: 'EET' },
        { name: 'Macedonia del Nord', city: 'Skopje', flag: '🇲🇰', timezone: 'Europe/Skopje', abbr: 'CET' },
        { name: 'Svezia', city: 'Stoccolma', flag: '🇸🇪', timezone: 'Europe/Stockholm', abbr: 'CET' },
        { name: 'Australia', city: 'Sydney', flag: '🇦🇺', timezone: 'Australia/Sydney', abbr: 'AEDT' },
        { name: 'Taiwan', city: 'Taipei', flag: '🇹🇼', timezone: 'Asia/Taipei', abbr: 'CST' },
        { name: 'Estonia', city: 'Tallinn', flag: '🇪🇪', timezone: 'Europe/Tallinn', abbr: 'EET' },
        { name: 'Uzbekistan', city: 'Tashkent', flag: '🇺🇿', timezone: 'Asia/Tashkent', abbr: 'UZT' },
        { name: 'Georgia', city: 'Tbilisi', flag: '🇬🇪', timezone: 'Asia/Tbilisi', abbr: 'GET' },
        { name: 'Iran', city: 'Teheran', flag: '🇮🇷', timezone: 'Asia/Tehran', abbr: 'IRST' },
        { name: 'Israele', city: 'Tel Aviv', flag: '🇮🇱', timezone: 'Asia/Tel_Aviv', abbr: 'IST' },
        { name: 'Albania', city: 'Tirana', flag: '🇦🇱', timezone: 'Europe/Tirana', abbr: 'CET' },
        { name: 'Giappone', city: 'Tokyo', flag: '🇯🇵', timezone: 'Asia/Tokyo', abbr: 'JST' },
        { name: 'Canada', city: 'Toronto', flag: '🇨🇦', timezone: 'America/Toronto', abbr: 'EST' },
        { name: 'Tunisia', city: 'Tunisi', flag: '🇹🇳', timezone: 'Africa/Tunis', abbr: 'CET' },
        { name: 'Canada', city: 'Vancouver', flag: '🇨🇦', timezone: 'America/Vancouver', abbr: 'PST' },
        { name: 'Polonia', city: 'Varsavia', flag: '🇵🇱', timezone: 'Europe/Warsaw', abbr: 'CET' },
        { name: 'Austria', city: 'Vienna', flag: '🇦🇹', timezone: 'Europe/Vienna', abbr: 'CET' },
        { name: 'Laos', city: 'Vientiane', flag: '🇱🇦', timezone: 'Asia/Vientiane', abbr: 'ICT' },
        { name: 'Lituania', city: 'Vilnius', flag: '🇱🇹', timezone: 'Europe/Vilnius', abbr: 'EET' },
        { name: 'DC (USA)', city: 'Washington', flag: '🇺🇸', timezone: 'America/New_York', abbr: 'EST' },
        { name: 'Nuova Zelanda', city: 'Wellington', flag: '🇳🇿', timezone: 'Pacific/Auckland', abbr: 'NZDT' },
        { name: 'Canada', city: 'Winnipeg', flag: '🇨🇦', timezone: 'America/Winnipeg', abbr: 'CST' },
        { name: 'Croazia', city: 'Zagabria', flag: '🇭🇷', timezone: 'Europe/Zagreb', abbr: 'CET' },
        { name: 'Svizzera', city: 'Zurigo', flag: '🇨🇭', timezone: 'Europe/Zurich', abbr: 'CET' }
    ];

    const clocksContainer = document.getElementById('world-clocks');
    const favoritesContainer = document.getElementById('favorites-clocks');
    const noFavoritesMsg = document.getElementById('no-favorites');
    const searchInput = document.getElementById('search-country');

    // Load favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('favoriteCities')) || [];

    // Genera le card degli orologi
    function generateClocks(citiesToShow = worldCities, container = clocksContainer, showFavoriteBtn = true) {
        container.innerHTML = '';
        
        citiesToShow.forEach((location, index) => {
            const clockCard = document.createElement('div');
            clockCard.className = 'clock-card';
            clockCard.style.animationDelay = `${index * 0.05}s`;
            clockCard.dataset.country = location.name.toLowerCase();
            clockCard.dataset.city = location.city.toLowerCase();
            clockCard.dataset.timezone = location.timezone;
            
            const isFavorite = favorites.some(fav => fav.timezone === location.timezone);
            
            clockCard.innerHTML = `
                ${showFavoriteBtn ? `
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-timezone="${location.timezone}">
                    <svg viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                </button>
                ` : `
                <button class="favorite-btn favorite-remove" data-timezone="${location.timezone}">
                    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                </button>
                `}
                <div class="card-header">
                    <div class="flag">${location.flag}</div>
                    <div class="country-info">
                        <h3>${location.city}</h3>
                        <span class="timezone-label">${location.abbr}</span>
                    </div>
                </div>
                
                <div class="time-display">
                    <div class="time" data-timezone="${location.timezone}">
                        <span class="hour">--</span>
                        <span class="separator">:</span>
                        <span class="minute">--</span>
                        <span class="separator">:</span>
                        <span class="second">--</span>
                    </div>
                </div>

                <div class="date-display">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M2 6H14" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M5 1V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M11 1V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <span class="date-text"></span>
                </div>

                <div class="timezone-full">${location.timezone}</div>
            `;
            
            container.appendChild(clockCard);
        });

        // Add click handlers to favorite buttons
        container.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(btn.dataset.timezone);
            });
        });
    }

    // Toggle favorite
    function toggleFavorite(timezone) {
        const cityData = worldCities.find(c => c.timezone === timezone);
        if (!cityData) return;

        const index = favorites.findIndex(fav => fav.timezone === timezone);
        
        if (index > -1) {
            // Remove from favorites
            favorites.splice(index, 1);
        } else {
            // Add to favorites
            favorites.push(cityData);
        }

        // Save to localStorage
        localStorage.setItem('favoriteCities', JSON.stringify(favorites));

        // Refresh displays
        updateFavoritesDisplay();
        generateClocks(worldCities);
    }

    // Update favorites display
    function updateFavoritesDisplay() {
        if (favorites.length === 0) {
            noFavoritesMsg.style.display = 'block';
            favoritesContainer.innerHTML = '';
            favoritesContainer.appendChild(noFavoritesMsg);
        } else {
            noFavoritesMsg.style.display = 'none';
            generateClocks(favorites, favoritesContainer, false);
        }
    }

    // Ricerca
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            if (searchTerm === '') {
                generateClocks(worldCities);
            } else {
                const filtered = worldCities.filter(location => 
                    location.name.toLowerCase().includes(searchTerm) ||
                    location.city.toLowerCase().includes(searchTerm)
                );
                generateClocks(filtered);
            }
        });
    }

    // Genera gli orologi inizialmente
    generateClocks();
    updateFavoritesDisplay();

    // Aggiorna tutti gli orologi
    function updateAllClocks() {
        const now = new Date();
        const timeElements = document.querySelectorAll('.time');
        
        timeElements.forEach(timeElement => {
            const timezone = timeElement.dataset.timezone;
            
            if (!timezone) return;
            
            try {
                const fullTime = now.toLocaleTimeString('it-IT', {
                    timeZone: timezone,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                });
                
                const parts = fullTime.split(':');
                
                const hourSpan = timeElement.querySelector('.hour');
                const minuteSpan = timeElement.querySelector('.minute');
                const secondSpan = timeElement.querySelector('.second');
                
                if (hourSpan && parts[0]) hourSpan.textContent = parts[0];
                if (minuteSpan && parts[1]) minuteSpan.textContent = parts[1];
                if (secondSpan && parts[2]) secondSpan.textContent = parts[2];
                
                // Aggiorna la data
                const clockCard = timeElement.closest('.clock-card');
                if (clockCard) {
                    const dateText = clockCard.querySelector('.date-text');
                    if (dateText) {
                        const formattedDate = now.toLocaleDateString('it-IT', {
                            timeZone: timezone,
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        });
                        dateText.textContent = formattedDate;
                    }
                }
            } catch (error) {
                console.warn(`Errore aggiornamento timezone ${timezone}:`, error);
                // Mostra comunque qualcosa invece di lasciare vuoto
                const hourSpan = timeElement.querySelector('.hour');
                const minuteSpan = timeElement.querySelector('.minute');
                const secondSpan = timeElement.querySelector('.second');
                
                if (hourSpan && hourSpan.textContent === '--') hourSpan.textContent = '00';
                if (minuteSpan && minuteSpan.textContent === '--') minuteSpan.textContent = '00';
                if (secondSpan && secondSpan.textContent === '--') secondSpan.textContent = '00';
            }
        });
    }

    // Aggiornamento iniziale
    updateAllClocks();
    
    // Aggiorna ogni secondo
    setInterval(updateAllClocks, 1000);
}

// ===== ALARM SOUND =====
function playAlarmSound() {
    const soundType = document.getElementById('alarm-sound')?.value || 'beep';
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    const sounds = {
        beep: { freq: 1000, type: 'square', count: 5, duration: 0.3, interval: 400 },
        bell: { freq: 800, type: 'sine', count: 3, duration: 0.5, interval: 600 },
        digital: { freq: 1200, type: 'triangle', count: 4, duration: 0.2, interval: 300 },
        alarm: { freq: 900, type: 'sawtooth', count: 6, duration: 0.25, interval: 350 },
        gentle: { freq: 600, type: 'sine', count: 3, duration: 0.6, interval: 800 }
    };
    
    const sound = sounds[soundType] || sounds.beep;
    
    for (let i = 0; i < sound.count; i++) {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = sound.freq;
            oscillator.type = sound.type;
            
            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + sound.duration);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + sound.duration);
        }, i * sound.interval);
    }
}

// ===== NOTIFICATION =====
function showNotification() {
    const notification = document.getElementById('timer-notification');
    const closeBtn = document.getElementById('close-notification');
    
    notification.classList.add('show');
    
    const autoCloseTimeout = setTimeout(() => {
        notification.classList.remove('show');
    }, 10000);
    
    closeBtn.onclick = () => {
        notification.classList.remove('show');
        clearTimeout(autoCloseTimeout);
    };
}

// ===== VISITOR STATISTICS =====
function initializeHomeTime() {
    function updateHomeTime() {
        const now = new Date();
        const timeEl = document.getElementById('home-current-time');
        const dateEl = document.getElementById('home-current-date');
        
        if (timeEl) {
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            timeEl.textContent = `${hours}:${minutes}:${seconds}`;
        }
        
        if (dateEl) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateEl.textContent = now.toLocaleDateString('it-IT', options);
        }
    }
    
    // Aggiorna immediatamente e poi ogni secondo
    updateHomeTime();
    setInterval(updateHomeTime, 1000);
}

// ===== VISITOR STATISTICS =====
function initializeStats() {
    // Ottieni il numero di visualizzazioni dal localStorage
    let profileViews = parseInt(localStorage.getItem('profileViews')) || 0;

    // Incrementa il contatore
    profileViews++;

    // Salva il valore aggiornato
    localStorage.setItem('profileViews', profileViews);

    // Aggiorna la visualizzazione con animazione
    updateStatsDisplay(profileViews);
}

function updateStatsDisplay(views) {
    const profileViewsEl = document.getElementById('profile-views');

    if (profileViewsEl) {
        animateNumber(profileViewsEl, 0, views, 1500);
    }
}

function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16); // 60 FPS
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString('it-IT');
    }, 16);
}

// ===== TIMER HISTORY & STATS =====
function saveTimerToHistory(seconds) {
    const history = JSON.parse(localStorage.getItem('timerHistory') || '[]');
    const now = new Date();
    
    history.unshift({
        duration: seconds,
        timestamp: now.toISOString(),
        date: now.toLocaleDateString('it-IT', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    });
    
    // Keep only last 10 timers
    if (history.length > 10) {
        history.pop();
    }
    
    localStorage.setItem('timerHistory', JSON.stringify(history));
    updateTimerStats();
}

// ===== SAVED TIMER PRESETS =====
function loadSavedPresets() {
    const presets = JSON.parse(localStorage.getItem('timerPresets') || '[]');
    const container = document.getElementById('saved-presets');
    const currentLang = localStorage.getItem('selectedLanguage') || 'it';
    
    if (!container) return;
    
    if (presets.length === 0) {
        container.innerHTML = `<p class="empty-message" data-i18n="timer.noSaved">${translations[currentLang]['timer.noSaved']}</p>`;
        return;
    }
    
    container.innerHTML = presets.map((preset, index) => {
        const minutes = Math.floor(preset.duration / 60);
        const seconds = preset.duration % 60;
        const timeStr = minutes > 0 
            ? `${minutes}m ${seconds}s` 
            : `${seconds}s`;
        
        return `
            <div class="preset-item" onclick="applyPreset(${index})">
                <div class="preset-info">
                    <div class="preset-name">${preset.name}</div>
                    <div class="preset-time">${timeStr}</div>
                </div>
                <div class="preset-actions">
                    <button class="preset-action-btn" onclick="event.stopPropagation(); editPreset(${index})" title="Modifica">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                    </button>
                    <button class="preset-action-btn delete" onclick="event.stopPropagation(); deletePreset(${index})" title="Elimina">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function applyPreset(index) {
    const presets = JSON.parse(localStorage.getItem('timerPresets') || '[]');
    if (!presets[index]) return;
    
    const minutes = Math.floor(presets[index].duration / 60);
    const seconds = presets[index].duration % 60;
    
    document.getElementById('timer-minutes').value = minutes;
    document.getElementById('timer-seconds').value = seconds;
    
    // Scroll to timer display
    document.querySelector('.timer-container').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function editPreset(index) {
    const presets = JSON.parse(localStorage.getItem('timerPresets') || '[]');
    if (!presets[index]) return;
    
    const minutes = Math.floor(presets[index].duration / 60);
    const seconds = presets[index].duration % 60;
    
    document.getElementById('preset-name').value = presets[index].name;
    document.getElementById('preset-minutes').value = minutes;
    document.getElementById('preset-seconds').value = seconds;
    
    // Store editing index
    document.getElementById('preset-form').dataset.editIndex = index;
    
    openPresetModal();
}

function deletePreset(index) {
    const currentLang = localStorage.getItem('selectedLanguage') || 'it';
    const confirmMessages = {
        it: 'Vuoi eliminare questo preset?',
        en: 'Do you want to delete this preset?',
        es: '¿Quieres eliminar este preset?',
        fr: 'Voulez-vous supprimer ce preset?',
        de: 'Möchten Sie dieses Preset löschen?'
    };
    
    if (confirm(confirmMessages[currentLang])) {
        const presets = JSON.parse(localStorage.getItem('timerPresets') || '[]');
        presets.splice(index, 1);
        localStorage.setItem('timerPresets', JSON.stringify(presets));
        loadSavedPresets();
    }
}

function openPresetModal() {
    document.getElementById('preset-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePresetModal() {
    document.getElementById('preset-modal').classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('preset-form').reset();
    delete document.getElementById('preset-form').dataset.editIndex;
}

// Initialize preset modal
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-preset-btn');
    const closeBtn = document.getElementById('close-preset-modal');
    const cancelBtn = document.getElementById('cancel-preset');
    const overlay = document.getElementById('preset-modal-overlay');
    const form = document.getElementById('preset-form');
    
    if (addBtn) addBtn.addEventListener('click', openPresetModal);
    if (closeBtn) closeBtn.addEventListener('click', closePresetModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closePresetModal);
    if (overlay) overlay.addEventListener('click', closePresetModal);
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('preset-name').value.trim();
            const minutes = parseInt(document.getElementById('preset-minutes').value) || 0;
            const seconds = parseInt(document.getElementById('preset-seconds').value) || 0;
            const duration = minutes * 60 + seconds;
            
            if (duration === 0) {
                alert('Il timer deve essere maggiore di 0 secondi!');
                return;
            }
            
            const presets = JSON.parse(localStorage.getItem('timerPresets') || '[]');
            const editIndex = form.dataset.editIndex;
            
            if (editIndex !== undefined) {
                // Edit existing
                presets[editIndex] = { name, duration };
            } else {
                // Add new
                presets.push({ name, duration });
            }
            
            localStorage.setItem('timerPresets', JSON.stringify(presets));
            loadSavedPresets();
            closePresetModal();
        });
    }
    
    // Load presets on page load
    loadSavedPresets();
    
    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePresetModal();
        }
    });
});

function updateTimerStats() {
    const history = JSON.parse(localStorage.getItem('timerHistory') || '[]');
    
    if (history.length === 0) {
        document.getElementById('total-timers').textContent = '0';
        document.getElementById('total-time').textContent = '0m';
        document.getElementById('avg-timer').textContent = '0m';
        document.getElementById('longest-timer').textContent = '0m';
        return;
    }
    
    // Total timers completed
    document.getElementById('total-timers').textContent = history.length;
    
    // Total time
    const totalSeconds = history.reduce((sum, item) => sum + item.duration, 0);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalTimeStr = totalHours > 0 
        ? `${totalHours}h ${totalMinutes % 60}m`
        : `${totalMinutes}m`;
    document.getElementById('total-time').textContent = totalTimeStr;
    
    // Average timer
    const avgSeconds = Math.floor(totalSeconds / history.length);
    const avgMinutes = Math.floor(avgSeconds / 60);
    const avgTimeStr = avgMinutes > 0 
        ? `${avgMinutes}m ${avgSeconds % 60}s`
        : `${avgSeconds}s`;
    document.getElementById('avg-timer').textContent = avgTimeStr;
    
    // Longest timer
    const longestSeconds = Math.max(...history.map(item => item.duration));
    const longestMinutes = Math.floor(longestSeconds / 60);
    const longestTimeStr = longestMinutes > 0 
        ? `${longestMinutes}m ${longestSeconds % 60}s`
        : `${longestSeconds}s`;
    document.getElementById('longest-timer').textContent = longestTimeStr;
}

// Initialize history and stats on page load
document.addEventListener('DOMContentLoaded', () => {
    updateTimerStats();
    loadSavedPresets();
});

// ===== HEADER STATUS & VISITORS =====
// Online/Offline status
function updateOnlineStatus() {
    const statusBadge = document.getElementById('online-status');
    const statusText = statusBadge?.querySelector('.status-text');
    const statusDot = statusBadge?.querySelector('.status-dot');
    
    if (navigator.onLine) {
        statusBadge?.style.setProperty('background', 'rgba(16, 185, 129, 0.1)');
        statusBadge?.style.setProperty('border-color', 'rgba(16, 185, 129, 0.3)');
        statusDot?.style.setProperty('background', '#10b981');
        if (statusText) statusText.textContent = 'Online';
        if (statusText) statusText.style.color = '#10b981';
    } else {
        statusBadge?.style.setProperty('background', 'rgba(239, 68, 68, 0.1)');
        statusBadge?.style.setProperty('border-color', 'rgba(239, 68, 68, 0.3)');
        statusDot?.style.setProperty('background', '#ef4444');
        if (statusText) statusText.textContent = 'Offline';
        if (statusText) statusText.style.color = '#ef4444';
    }
}

// Live visitors counter (simulated)
function updateLiveVisitors() {
    const visitorsEl = document.getElementById('live-visitors');
    if (!visitorsEl) return;
    
    // Simulate live visitors (in real app, this would come from server/analytics)
    const baseVisitors = 127;
    const randomVariation = Math.floor(Math.random() * 20) - 10;
    const liveCount = baseVisitors + randomVariation;
    
    visitorsEl.textContent = liveCount;
}

// Initialize header features
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

document.addEventListener('DOMContentLoaded', () => {
    updateOnlineStatus();
    updateLiveVisitors();
    
    // Update visitors count every 30 seconds
    setInterval(updateLiveVisitors, 30000);
});

// ===== FOOTER FEATURES =====
// Animated counter for footer stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Initialize footer stats animation on scroll
function initFooterStats() {
    const footer = document.querySelector('.footer');
    const usersEl = document.getElementById('footer-users');
    const timersEl = document.getElementById('footer-timers');
    let animated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                if (usersEl) animateCounter(usersEl, 10342, 2000);
                if (timersEl) animateCounter(timersEl, 52847, 2500);
            }
        });
    }, { threshold: 0.3 });
    
    if (footer) observer.observe(footer);
}

// Newsletter form submission
function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const email = input.value;
        
        if (email) {
            // Simulate newsletter subscription
            const currentLang = localStorage.getItem('selectedLanguage') || 'it';
            const messages = {
                it: '✅ Grazie per l\'iscrizione!',
                en: '✅ Thanks for subscribing!',
                es: '✅ ¡Gracias por suscribirte!',
                fr: '✅ Merci pour votre inscription!',
                de: '✅ Danke für die Anmeldung!'
            };
            
            alert(messages[currentLang] || messages.it);
            input.value = '';
        }
    });
}

// Initialize footer features
document.addEventListener('DOMContentLoaded', () => {
    initFooterStats();
});

// ===== CONTACT FORM =====
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value;
        
        const currentLang = localStorage.getItem('selectedLanguage') || 'it';
        const successMessages = {
            it: '✅ Messaggio inviato con successo! Ti risponderemo presto.',
            en: '✅ Message sent successfully! We will reply soon.',
            es: '✅ ¡Mensaje enviado con éxito! Responderemos pronto.',
            fr: '✅ Message envoyé avec succès! Nous répondrons bientôt.',
            de: '✅ Nachricht erfolgreich gesendet! Wir werden bald antworten.'
        };
        
        // Simulate form submission
        alert(successMessages[currentLang] || successMessages.it);
        form.reset();
    });
}

// Initialize contact form
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});

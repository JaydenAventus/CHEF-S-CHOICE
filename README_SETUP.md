# CHEF'S CHOICE - PHP & SQL Setup Gids

## 📋 Stappen om de database in te stellen

### 1. **phpMyAdmin openen**
- Ga naar `http://localhost/phpmyadmin` in je browser
- Log in met:
  - **Gebruikersnaam:** `root`
  - **Wachtwoord:** (leeg laten voor XAMPP/WAMP standaard)

### 2. **Database aanmaken**
- Klik op de **SQL** tab
- Kopieer alle SQL code uit `database.sql` 
- Plak het in het tekstgebied
- Klik **Uitvoeren** (Execute)

**Of handmatig:**
1. Klik op **"Nieuw"** in het linkermenu
2. Voer in: `chefs_choice`
3. Klik **Maken**

### 3. **Bestanden plaatsen**
Zorg dat deze PHP bestanden in je webserver root staan:
```
htdocs/ (XAMPP) of www/ (WAMP)
├── config.php          (Database configuratie)
├── register.php        (Registratiepagina)
├── login.php           (Inlogpagina)
├── logout.php          (Uitloggen)
├── index.html
├── styles.css
└── scripts.js
```

### 4. **Database URL's**
Na setup kunt u deze pagina's gebruiken:

| Pagina | URL |
|--------|-----|
| Registreren | `http://localhost/register.php` |
| Inloggen | `http://localhost/login.php` |
| Uitloggen | `http://localhost/logout.php` |

## 🔧 Database Schema

### Tabellen:
1. **users** - Geregistreerde gebruikers
2. **recipes** - Recepten
3. **courses** - Kooklessens
4. **enrollments** - Inschrijvingen voor cursussen
5. **team_members** - Teamleden
6. **reviews** - Beoordelingen

## 💾 Verbindingsgegevens

**config.php:**
```php
$servername = "localhost";
$username = "root";
$password = "";  // XAMPP/WAMP standaard
$database = "chefs_choice";
```

## 🧪 Test gegevens toevoegen

In phpMyAdmin, SQL tab:

```sql
-- Test gebruiker
INSERT INTO users (username, email, password, full_name) 
VALUES ('testchef', 'test@chefs.nl', '$2y$10$...', 'Test Chef');

-- Test recept
INSERT INTO recipes (title, description, user_id) 
VALUES ('Bitterballen', 'Nederlandse snack', 1);
```

## 🔐 Beveiliging

✅ Wachtwoorden zijn gehashed met `password_hash()`  
✅ Prepared statements voorkomen SQL injectie  
✅ Session management voor gebruiker tracking  
✅ Input validatie

## 📝 Volgende Stappen

1. Update `inloggen.html` → `login.php`
2. Update `aanmelden.html` → `register.php`
3. Voeg een `dashboard.php` toe voor ingelogde gebruikers
4. Voeg recepten management toe
5. Voeg cursussysteem toe

## ⚙️ Lokale Server Starten

**XAMPP:**
```bash
xampp-control (Windows)
./xampp/xampp start (Linux)
```

**WAMP:**
```bash
Klik op WAMP icon in taskbar → Start All Services
```

**PHP Ingebouwde Server:**
```bash
cd /path/to/project
php -S localhost:8000
```

## 🆘 Problemen?

| Probleem | Oplossing |
|----------|-----------|
| "Connection refused" | Zorg dat MySQL/phpMyAdmin draait |
| "Unknown database" | Voer database.sql uit in phpMyAdmin |
| Foutmelding "Access denied" | Check $username en $password in config.php |

Veel succes met je project! 🍳

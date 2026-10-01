import { useState } from 'react';
import { Accordion } from '@/components/Accordion';
import { Alert } from '@/components/Alert';
import { Avatar } from '@/components/Avatar';
import { Badge } from '@/components/Badge';
import { BarChart } from '@/components/BarChart';
import { BottomNavItem } from '@/components/BottomNavItem';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { ActionCard } from '@/components/ActionCard';
import { BenefitsCard } from '@/components/BenefitsCard';
import { ConfirmModal } from '@/components/ConfirmModal';
import { CoreButton } from '@/components/CoreButton';
import { CoreField } from '@/components/CoreField';
import { CoreSelect } from '@/components/CoreSelect';
import { CoreTabs } from '@/components/CoreTabs';
import { DashboardParcelRow } from '@/components/DashboardParcelRow';
import { Divider } from '@/components/Divider';
import { DropdownMenu } from '@/components/DropdownMenu';
import { EmptyState } from '@/components/EmptyState';
import { FaqItem } from '@/components/FaqItem';
import { FavoriteRelayCard } from '@/components/FavoriteRelayCard';
import { FeatureCard } from '@/components/FeatureCard';
import { FilterPill } from '@/components/FilterPill';
import { FileUpload } from '@/components/FileUpload';
import { Footer } from '@/components/Footer';
import { InfoRow } from '@/components/InfoRow';
import { LinkButton } from '@/components/LinkButton';
import { LocationCard } from '@/components/LocationCard';
import { MetricCard } from '@/components/MetricCard';
import { Navbar } from '@/components/Navbar';
import { NotificationItem } from '@/components/NotificationItem';
import { OutcomeModal } from '@/components/OutcomeModal';
import { NotificationRow } from '@/components/NotificationRow';
import { Pagination } from '@/components/Pagination';
import { ParcelCard } from '@/components/ParcelCard';
import { PhotoUpload } from '@/components/PhotoUpload';
import { ProcessBadge } from '@/components/ProcessBadge';
import { ParcelRow } from '@/components/ParcelRow';
import { ParcelTimeline } from '@/components/ParcelTimeline';
import { ProgressBar } from '@/components/ProgressBar';
import { QuestionSearch } from '@/components/QuestionSearch';
import { QrScanner } from '@/components/QrScanner';
import { RelayResultCard } from '@/components/RelayResultCard';
import { ResetPasswordCard } from '@/components/ResetPasswordCard';
import { QuickActionCard } from '@/components/QuickActionCard';
import { Radio } from '@/components/Radio';
import { RelayCard } from '@/components/RelayCard';
import { SearchBar } from '@/components/SearchBar';
import { Select } from '@/components/Select';
import { ShipmentStatus } from '@/components/ShipmentStatus';
import { Sidebar } from '@/components/Sidebar';
import { SidebarNavItem } from '@/components/SidebarNavItem';
import { Skeleton } from '@/components/Skeleton';
import { StatCard } from '@/components/StatCard';
import { StatusSummary } from '@/components/StatusSummary';
import { StepCard } from '@/components/StepCard';
import { StepsList } from '@/components/StepsList';
import { SuccessFeedback } from '@/components/SuccessFeedback';
import { Stepper } from '@/components/Stepper';
import { Switch } from '@/components/Switch';
import { Tabs } from '@/components/Tabs';
import { Tag } from '@/components/Tag';
import { TextField } from '@/components/TextField';
import { Toast } from '@/components/Toast';
import { Tooltip } from '@/components/Tooltip';
import { TrackingBadge } from '@/components/TrackingBadge';
import { TrackingCard } from '@/components/TrackingCard';
import { TrackingSearch } from '@/components/TrackingSearch';
import { ValueCard } from '@/components/ValueCard';
import './App.css';

export function App() {
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState('all');

  return (
    <div className="catalog">
      <header className="catalog-hero">
        <p>LeRelais</p>
        <h1>Bibliothèque UI</h1>
      </header>

      <Navbar />
      <Navbar variant="particulier" />

      <section>
        <h2>Boutons</h2>
        <div className="row">
          <Button>Continuer</Button>
          <Button variant="secondary">Continuer</Button>
          <Button variant="ghost">Continuer</Button>
          <Button disabled>Continuer</Button>
        </div>
      </section>

      <section>
        <h2>Formulaires</h2>
        <div className="row">
          <TextField label="Libellé" placeholder="Saisir une valeur" />
          <TextField label="Libellé" defaultValue="Abidjan, Cocody" />
          <TextField label="Libellé" error="Valeur incorrecte" defaultValue="Valeur incorrecte" />
          <Select
            label="Mode de livraison"
            options={[
              { value: 'relay', label: 'Point relais' },
              { value: 'home', label: 'Domicile' },
            ]}
          />
        </div>
        <div className="row">
          <Checkbox label="Recevoir les notifications" />
          <Radio name="delivery" label="Point relais" defaultChecked />
          <Radio name="delivery" label="Domicile" />
          <Switch label="Alertes" defaultChecked />
          <SearchBar placeholder="Rechercher un colis, un relais…" />
        </div>
      </section>

      <section>
        <h2>Statuts</h2>
        <div className="row">
          <Badge status="pending" />
          <Badge status="transit" />
          <Badge status="available" />
          <Badge status="delivered" />
          <Badge status="error" />
        </div>
        <div className="row">
          <ShipmentStatus status="preparing" />
          <ShipmentStatus status="dropped" />
          <ShipmentStatus status="transit" />
          <ShipmentStatus status="delivered" />
          <ShipmentStatus status="anomaly" />
        </div>
        <div className="row">
          <Tag>Standard</Tag>
          <Tag type="active">Actif</Tag>
          <Tag type="removable">Filtre</Tag>
          <Tag type="success">Disponible</Tag>
          <Tag type="warning">En attente</Tag>
          <Tag type="error">Anomalie</Tag>
        </div>
      </section>

      <section>
        <h2>Navigation</h2>
        <Tabs
          value={tab}
          onChange={setTab}
          items={[
            { id: 'all', label: 'Tous' },
            { id: 'transit', label: 'En transit' },
          ]}
        />
        <Stepper
          steps={[
            { label: 'Je prépare mon colis', state: 'done' },
            { label: 'Expéditeur', state: 'done' },
            { label: 'Récapitulatif', state: 'active' },
            { label: 'Paiement', state: 'upcoming' },
          ]}
        />
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '#accueil' },
            { label: 'Mes colis', href: '#colis' },
            { label: 'LR-2026-000123' },
          ]}
        />
        <Pagination page={page} pageCount={3} onChange={setPage} />
        <div className="row">
          <BottomNavItem label="Accueil" />
          <BottomNavItem label="Accueil" active />
        </div>
        <LinkButton href="#relais">Voir tous les relais partenaires</LinkButton>
      </section>

      <section className="split">
        <Sidebar />
        <div>
          <div className="row dark">
            <SidebarNavItem label="Tableau de bord" />
            <SidebarNavItem label="Tableau de bord" active />
          </div>
          <NotificationRow
            title="Colis disponible en point relais"
            description="Votre colis LR-2026-084215 est arrivé au relais Cocody Centre."
            time="Il y a 2h"
          />
          <DashboardParcelRow
            trackingId="LR-2026-084215"
            route="Abidjan → Bouaké"
            recipient="À l'attention de Marie Konan"
            status="En transit"
            date="13 août 2026 · 08:42"
          />
        </div>
      </section>

      <section>
        <h2>Cartes</h2>
        <div className="row">
          <MetricCard label="Colis en cours" value="128" hint="+8 cette semaine" />
          <StatCard label="Colis en cours" value="0" hint="En transit ou en préparation" />
          <ParcelCard
            trackingId="LR-2026-084215"
            route="Abidjan → Bouaké"
            recipient="Destinataire · Aminata K."
            status="En transit"
          />
          <RelayCard name="Carrefour Cocody" location="Cocody · 1,2 km" hours="Ouvert · ferme à 20:00" />
        </div>
        <FavoriteRelayCard
          name="Épicerie Centrale"
          address="12 rue de Charenton, Abidjan 12e"
          distance="350m"
          hours="Lun-Sam 08:00-21:00"
          services={['Dépôt', 'Retrait', 'Scan QR']}
        />
        <QuickActionCard title="Envoyer un colis" description="Préparez un nouvel envoi" />
        <ParcelRow trackingId="LR-084215" recipient="Aminata K." location="Cocody" status="En transit" date="20 août 2026" />
      </section>

      <section>
        <h2>Feedback</h2>
        <div className="row">
          <Alert>Information utile pour continuer.</Alert>
          <Alert type="success">L’opération a été enregistrée.</Alert>
          <Alert type="warning">Une vérification est nécessaire.</Alert>
          <Alert type="error">Une erreur empêche de continuer.</Alert>
        </div>
        <div className="row">
          <Toast>Colis envoyé avec succès.</Toast>
          <Toast type="error">Une erreur est survenue.</Toast>
        </div>
        <ProgressBar label="En cours de traitement" value={65} />
        <Accordion title="Quels sont les délais de livraison en point relais ?">
          Les délais de livraison varient de 24h à 72h ouvrées selon la destination.
        </Accordion>
        <Divider label="ou" caption="Avec label central" />
        <div className="row">
          <Avatar initials="JD" size="sm" />
          <Avatar initials="JD" size="md" />
          <Avatar initials="JD" size="lg" />
          <Avatar initials="JD" size="xl" />
          <Skeleton />
          <Skeleton type="rectangle" />
          <Skeleton type="circle" />
          <Tooltip label="Tooltip text">
            <Button variant="ghost">Survoler</Button>
          </Tooltip>
          <DropdownMenu />
        </div>
        <NotificationItem
          unread
          title="Colis LR-2026-000123 disponible"
          description="Votre colis est prêt à être retiré au relais Tabac du Centre."
          time="Il y a 2 heures"
        />
      </section>

      <section className="row">
        <ParcelTimeline
          events={[
            { title: 'Colis créé', time: '18 août · 09:12', done: true },
            { title: 'Pris en charge', time: '18 août · 14:40', done: true },
            { title: 'En transit', time: '19 août · 08:15', done: true },
            { title: 'Disponible au relais', time: 'À venir' },
          ]}
        />
        <QrScanner />
        <EmptyState
          title="Aucun colis"
          description={'Les nouveaux colis apparaîtront ici.\nCommencez par envoyer votre premier colis.'}
        />
        <ConfirmModal
          title="Confirmer la remise du colis ?"
          description="Cette action marque le colis comme remis au destinataire et enregistre l'opération."
        />
      </section>

      <section>
        <FileUpload />
        <BarChart
          title="Colis par jour"
          items={[
            { label: 'Lun', value: 60 },
            { label: 'Mar', value: 110 },
            { label: 'Mer', value: 140 },
            { label: 'Jeu', value: 80 },
            { label: 'Ven', value: 145 },
          ]}
        />
      </section>

      <section>
        <h2>Core</h2>
        <div className="row">
          <CoreButton>Se connecter</CoreButton>
          <CoreButton variant="secondary">Créer un compte</CoreButton>
          <CoreButton variant="icon">Voir sur la carte</CoreButton>
          <CoreButton variant="compact">Ouvert maintenant</CoreButton>
        </div>
        <div className="row">
          <CoreField placeholder="vous@email.fr" />
          <CoreField type="password" placeholder="Mot de passe" />
          <CoreSelect
            options={[
              { value: 'abidjan', label: 'Abidjan' },
              { value: 'bouake', label: 'Bouaké' },
            ]}
          />
        </div>
        <CoreTabs />
        <div className="row">
          <FilterPill active>Ouvert maintenant</FilterPill>
          <FilterPill>24h/24</FilterPill>
        </div>
        <QuestionSearch />
        <PhotoUpload />
        <div className="row">
          <TrackingCard />
          <RelayResultCard />
          <FeatureCard />
          <StepCard />
          <LocationCard />
          <ActionCard />
          <ValueCard />
          <BenefitsCard />
        </div>
        <ResetPasswordCard />
        <div className="row">
          <ProcessBadge />
          <ProcessBadge state="success" />
          <ProcessBadge state="error" />
          <TrackingBadge />
        </div>
        <StatusSummary />
        <TrackingSearch />
        <InfoRow />
        <StepsList />
        <FaqItem />
        <SuccessFeedback />
        <div className="row">
          <OutcomeModal />
          <OutcomeModal type="error" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

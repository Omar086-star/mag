import React, { useState } from 'react';
import './style.css';

export default function JoinTeamForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cv, setCv] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const [date, setDate] = useState('');
  const [berth, setBerth] = useState('');
  const [contry, setContry] = useState('');


  // وظيفة لإرسال البيانات عند تقديم النموذج
  const handleSubmit = (event) => {
    event.preventDefault();

    // تحقق من تعبئة الحقول
    if (!name || !email || !message || !date || !berth || !contry) {
      setFormStatus('الرجاء ملء جميع الحقول');
      return;
    }

    const newApplication = { name, email, cv, message, date, berth, contry };

    fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Spécifier que nous envoyons des données JSON
        },
        body: JSON.stringify(newApplication),  // Convertir l'objet JavaScript en une chaîne JSON
      })
      .then(response => response.json())  // Attendre que le serveur réponde
      .then(data => {
        console.log('Réponse du serveur:', data);
        setFormStatus('تم إرسال طلبك بنجاح. سيتم التواصل معك قريبًا.');
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi de l\'application', error);
        setFormStatus('حدث خطأ. يرجى المحاولة لاحقًا.');
      });
    // إعادة تعيين الحقول بعد الإرسال
    setName('');
    setEmail('');
    setCv('');
    setDate('');
    setContry('');
    setBerth('');
    setMessage('');
    setFormStatus('تم إرسال طلبك بنجاح. سيتم التواصل معك قريبًا.');
  };

  return (
    <div className="join-team-form-container">
      <h2>طلب انضمام إلى فريق العمل</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">الاسم الكامل:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">البريد الإلكتروني:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="text">محل الولادة :</label>
          <input
            type="text"
            id="text"
            value={berth}
            onChange={(e) => setBerth(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">تاريخ الولادة :</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contry">الإقامة الحالية :</label>
          <input
            type="text"
            id="contry"
            value={contry}
            onChange={(e) => setContry(e.target.value)}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="cv">السيرة الذاتية (اختياري):</label>
          <input
            type="file"
            id="cv"
            onChange={(e) => setCv(e.target.files[0])}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">لماذا ترغب في الانضمام إلى الفريق؟</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit">إرسال طلب الانضمام</button>
      </form>

      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
}

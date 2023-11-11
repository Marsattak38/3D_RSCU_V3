from django.shortcuts import render

def verificationPayement(eventId):
    import stripe

    # Configurez votre clé secrète Stripe
    stripe.api_key = 'sk_test_51Ms8bXANSuV8oWuSRIXT85HvDkOQqDMSNcTJV3XUDzUpLxtwi6jdpPJGIoazMwPPOz3fIH5KZF9ASsqYO0hUcOQF00Ql3JmpWH'

    # Remplacez 'event_id' par l'ID de l'événement de paiement Stripe que vous souhaitez récupérer
    event_id = eventId

    try:
        # Récupérez l'événement de paiement à partir de l'ID
        payment_event = stripe.Event.retrieve(event_id)

        # Vérifiez si l'événement est un événement de paiement réussi
        if payment_event['type'] == 'payment_intent.succeeded':
            payment_intent = payment_event['data']['object']  # Détails du paiement réussi
            print(f"Confirmation de paiement réussi : {payment_intent}")
            return True

        else:
            print(f"L'événement n'est pas un événement de paiement réussi : {payment_event}")

    except stripe.error.StripeError as e:
        print(f"Erreur Stripe : {e}")

# Create your views here.
def index(request):
    return render(request, 'app/index.html')

def modelisation(request):
    if request.method == 'POST':
        uploaded_file = request.FILE['file']
        if verificationPayement(evt_1Nyv6jANSuV8oWuSjJvHFExM) == True:
            print("success")

        

    return render(request, 'app/modelisation.html')

def printing(request):
    return render(request, 'app/printing.html')




import os
import threading
import shutil

app = Flask(__name__, template_folder='web', static_folder='web', static_url_path='/static')
api =


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/buscar')
def buscar():
    consulta = request.args.get('q', '')
    resultados = api.buscar(consulta)
    return jsonify(resultados)


@app.route('/api/episodios')
def episodios():
    anime_id = request.args.get('id', '')

@app.route('/api/enlaces')
def enlaces():
    anime_id = request.args.get('id', '')
    num_ep = request.args.get('ep', '')


def abrir_navegador():
    url = 'http://localhost:5000'
    navegadores = [
        'google-chrome', 
        'microsoft-edge', 
        'chromium', 
        'chromium-browser', 
        'brave-browser'
    ]

if __name__ == '__main__':
    threading.Timer(1.5, abrir_navegador).start()
    app.run(debug=False, host='127.0.0.1', port=5000)


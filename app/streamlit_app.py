import streamlit as st
import folium
from streamlit_folium import st_folium
import json

# Configuração do título
st.title("Mapa dos Estados do Brasil")

# Caminho do arquivo GeoJSON
geojson_file = "data/brazil-states.geojson"

# Carregar o arquivo GeoJSON
with open(geojson_file, 'r', encoding='utf-8') as f:
    geojson_data = json.load(f)

# Criar o mapa centralizado no Brasil
mapa = folium.Map(location=[-14.235, -51.9253], zoom_start=4)

# Definir estilo com borda preta e cor branca
def style_function(feature):
    return {
        'fillColor': 'white',  # Cor interna branca
        'color': 'black',     # Cor da borda preta
        'weight': 1,          # Espessura da borda
        'fillOpacity': 0.5    # Transparência do preenchimento
    }

# Adicionar os estados ao mapa
folium.GeoJson(
    geojson_data,
    name="Estados Brasileiros",
    style_function=style_function,
    highlight_function=lambda feature: {
        'weight': 3,  # Destacar borda ao clicar
        'color': 'orange',
        'fillOpacity': 0.7
    },
    tooltip=folium.GeoJsonTooltip(
        fields=["name", "sigla",],
        aliases=[
            "Nome do Estado:", 
            "Sigla:"
        ],
        localize=True
    )
).add_to(mapa)

# Exibir o mapa no Streamlit
st_folium(mapa, width=700, height=500)

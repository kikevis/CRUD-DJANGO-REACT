from django.db import models


class Movie(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, verbose_name='Titulo')
    genre = models.CharField(max_length=100, verbose_name='Genero')
    year = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    creator = models.ForeignKey('auth.User', related_name='movies', on_delete=models.CASCADE)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        fila = "Titulo: " + self.title + " | " + "Genero: " + self.genre
        return fila
